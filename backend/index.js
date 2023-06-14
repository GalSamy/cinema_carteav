const express = require("express")
const mongoose = require("mongoose")
const app = express()
const seats = require("./Model/Seat")
const {Transactions} = require("./Model/Transaction");

app.get('/seats', async (req,res)=>{
    for(let i = 0 ; i< 15; i++){
        let s = new seats.Seats({isTaken:false})
        await s.save()
    }
    const s = await seats.Seats.find().exec()
    return res.send(s)

})
app.set('/seats',async (req,res)=>{
    let seat =await seats.findById(req._id)
    seat.isTaken = true;
    await seat.save()
    let t = new Transactions({
        orderBy : req.name,
        seat : req._id
    })
    await t.save()
    return res.send(200).json("seat taken");
})
mongoose.connect('mongodb://127.0.0.1:27017/cinema');
mongoose.connection.on("connected", ()=>{
    console.log("connected to DB")
})
app.listen(8080, ()=>{
    console.log("listening port 8080")
})

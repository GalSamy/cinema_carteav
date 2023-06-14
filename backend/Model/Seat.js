const mongoose = require('mongoose');
const { Schema } = mongoose;


const SeatModel = new Schema({
    isTaken:{type: Boolean ,Default:false}
});

const Seats = mongoose.model("Seats", SeatModel)
module.exports ={
    Seats
}

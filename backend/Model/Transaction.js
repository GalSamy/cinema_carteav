const mongoose = require('mongoose');
const { Schema } = mongoose;


const TransactionModel = new Schema({
    orderBy : String,
    Seat: String
});

const Transactions = mongoose.model("Transactions", TransactionModel)
module.exports ={
    Transactions
}

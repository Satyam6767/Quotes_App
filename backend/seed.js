const mongoose = require("mongoose");
const Quotes = require("./models/Quote");

let dummyQuotes = [
    {
        author:"samarth vohra",
        text:"aadmi ka jeewan sangharsh hai harna ya jeetna nahi"
    },
    {
        author:"satyam kumar",
        text:"sangharsh krte rho"
    },
    {
        author:"sam vohra",
        text:"hara wahi jo lda nahi"
    },
    {
        author:"sam vohra2",
        text:"hara wahi jo lda nahi2"
    }
];

async function seedDB(){
    await Quotes.insertMany(dummyQuotes)
    console.log("DB seeded with data")

}


module.exports = seedDB;
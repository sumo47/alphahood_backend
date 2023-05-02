const express = require("express")

const app = express();
const mongoose = require('mongoose')
const route = require("./routes/route")
const cors = require("cors")
const multer = require("multer")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(multer().any())
// mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://sumit:sumit@cluster0.8dflsuw.mongodb.net/alphahood", {
    useNewUrlParser: true
})
    .then(() => { console.log("MongoDb is connected") })
    .catch((err) => { console.log(err.message) })

app.use('/', route)

port = process.env.PORT;

app.listen(port, () => {
    console.log("Express is running on port " + port)
});
const express = require('express');
const mongoose = require('mongoose');
const PORT = 4000;
const app = express();
const cors = require("cors");

const programRoute = require("./routes/program");

    

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors({
    origin: "http://localhost:3000"
}));





app.get('/', (req, res) => {
    res.status(200).send("Welcome to Listen.")

});

app.use('/api',programRoute);




app.listen(PORT, () => {
    mongoose.connect('mongodb+srv://Listner:Listner008@cluster0.vqlwp77.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        .then(() => console.log('Connected to MongoDB with server on 4000'))
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        })

});
const express = require('express');
const mongoose = require('mongoose');
const Campus = require('./api/campus');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); //Used to parse JSON bodies

var cors = require('cors');
app.use(cors());

app.use('/api/campus', Campus);
const PORT = process.env.PORT || 4000;

mongoose.connect(
    'mongodb://localhost/campus',
    {
        useNewUrlParser: true
    },

    (err, res) => {
        err && console.log('Error conectando a la bd');
        app.listen(PORT, () => {
            console.log('Corriendo en el puerto 4000');
        })
    }
)
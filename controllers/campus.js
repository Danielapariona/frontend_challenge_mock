const mongoose = require('mongoose');
const Campus = require('../models/Campus');

const findAllCampus = (req, res) => {
    Campus.find((err, campus) => {
        err && res.status(500).send({
            status: 0,
            message: err.message
        });

        res.status(200).json({
            status: 1,
            data: campus
        });
    })
}

const findById = (req, res) => {
    Campus.findById(req.params.id, (err, campus) => {
        err && res.status(500).send({
            status: 0,
            message: err.message
        });

        res.status(200).json({
            status: 1,
            message: '',
            data: campus
        });
    })
}

const addCampus = (req, res) => {
    let campus = new Campus({
        agencia: req.body.agencia,
        distrito: req.body.distrito,
        provincia: req.body.provincia,
        departamento: req.body.departamento,
        direccion: req.body.direccion,
        lat: req.body.lat,
        lon: req.body.lon
    })

    campus.save((err, camp) => {
        err && res.status(500).send({
            status: 0,
            message: err.message
        });

        res.status(200).json({
            status: 1,
            message: 'Se agregó correctamente la agencia',
            data: camp
        });
    })
}

const updateCampus = (req, res) => {
    Campus.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, (err, camp) => {
        console.log('Campo para actualizar', req.body);
        err && res.status(500).send({
            status: 0,
            message: err.message
        });
        res.status(200).json({
            status: 1,
            message: 'Se actualizó de forma satisfatoria',
            data: camp
        });
    });
}


module.exports = { findAllCampus, findById, addCampus, updateCampus }
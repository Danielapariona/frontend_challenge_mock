const CampusController = require('../controllers/campus');
const express = require('express');

const router = express.Router();

router.get("/all", CampusController.findAllCampus);
router.get("/:id", CampusController.findById);
router.post("/add", CampusController.addCampus);
router.post("/:id", CampusController.updateCampus);

module.exports = router;


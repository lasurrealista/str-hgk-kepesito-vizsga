/**
 * @Todo két végpont implementálása egy put és get metódusra
 *
 */
const express = require('express');
const router = express.Router();
const controller = require('./building.controller');
 
router.put('/', controller.updateBuilding);
router.get('/', controller.getAllBuildingWithClassrooms);

module.exports = router;
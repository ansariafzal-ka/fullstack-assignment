const express = require("express");
const router = express.Router();
const cardControllers = require("../controllers/card.controllers");

router.get("/", cardControllers.GET);
router.get("/:id", cardControllers.GET_SINGLE_CARD);
router.post("/", cardControllers.POST);

module.exports = router;

const router = require("express").Router();
const artistnear = require("./artistnear");

router.use("/artistnear", artistnear);

module.exports = router;

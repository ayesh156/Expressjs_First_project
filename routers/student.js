const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ "msg": "Hello student" });
});

router.post("/", (req, res) => {
  res.send({ "msg": "Hello post from student" });
});

module.exports = router;

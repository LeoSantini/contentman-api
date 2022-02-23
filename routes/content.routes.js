const express = require("express");
const router = express.Router();

router.post("/create-content", async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;

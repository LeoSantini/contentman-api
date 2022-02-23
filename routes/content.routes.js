const express = require("express");
const router = express.Router();

const ContentModel = require("../models/Content.model");

router.post("/create-content", async (req, res) => {
  try {
    const createdContent = await ContentModel.create(req.body);

    return res.status(201).json(createdContent);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;

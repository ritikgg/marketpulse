const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});
router.get("/test", (req, res) => {
  res.send("User route working");
});

module.exports = router;
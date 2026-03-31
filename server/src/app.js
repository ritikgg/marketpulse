const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

const allowedOrigins = ["http://localhost:5173",
  "https://marketpulse-sigma.vercel.app/"];


app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("API running");
});

module.exports = app;
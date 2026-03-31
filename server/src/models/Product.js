const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: String,
        price: { type: Number, required: true },
        category: String,
        image: String,
        stock: { type: Number, default: 10 },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
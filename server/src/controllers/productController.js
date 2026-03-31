const Product = require("../models/Product");

exports.getProducts = async (req, res) => {
    try {
        const keyword = req.query.search
            ? {
                name: { $regex: req.query.search, $options: "i" }
            }
            : {};

        const products = await Product.find(keyword).lean();
        const normalizedProducts = products.map(({ _id, __v, ...rest }) => ({
            ...rest,
            id: _id?.toString(),
        }));

        res.json(normalizedProducts);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch products" });
    }
};

//Create product
exports.createProduct = async (req, res) => {
    try {
        const { name, price, description, image, category } = req.body;
        const product = await Product.create({
            name,
            description,
            price,
            image,
            category,
            user: req.user._id
        });

        res.status(201).json(product);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to create product" });
    }
}

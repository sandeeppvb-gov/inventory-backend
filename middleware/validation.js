
const validateItem = (req, res, next) => {
    const { name, category, quantity, price } = req.body;

    if (!name || !category || quantity === undefined || price === undefined) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    if (typeof name !== "string" || typeof category !== "string") {
        return res.status(400).json({
            success: false,
            message: "Name and category must be text"
        });
    }

    if (
        !Number.isFinite(Number(quantity)) ||
        Number(quantity) < 0 ||
        !Number.isInteger(Number(quantity))
    ) {
        return res.status(400).json({
            success: false,
            message: "Quantity must be a non-negative integer"
        });
    }

    if (!Number.isFinite(Number(price)) || Number(price) < 0) {
        return res.status(400).json({
            success: false,
            message: "Price must be a non-negative number"
        });
    }

    next();
};

module.exports = validateItem;

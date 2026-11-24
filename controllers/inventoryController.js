
const inventory = require("../model/inventoryData");

// Get All Items

const getAllItems = (req, res) => {
    let result = [...inventory];

    const { category, quantity, search } = req.query;

    // Filter by Category
    if (category) {
        result = result.filter(
            item => item.category.toLowerCase() === category.toLowerCase()
        );
    }

    // Filter by Quantity
    if (quantity !== undefined) {
        const qty = Number(quantity);

        if (!Number.isFinite(qty) || qty < 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid quantity"
            });
        }

        result = result.filter(item => item.quantity === qty);
    }

    // Search by Item Name
    if (search) {
        result = result.filter(
            item => item.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    res.status(200).json({
        success: true,
        count: result.length,
        data: result
    });
};

// Get Single Item
const getItemById = (req, res) => {
    const id = Number(req.params.id);

    const item = inventory.find((item) => item.id === id);

    if (!item) {
        return res.status(404).json({
            success: false,
            message: "Item not found"
        });
    }

    res.status(200).json({
        success: true,
        data: item
    });
};

// Add New Item
const addItem = (req, res) => {
    const { name, category, quantity, price } = req.body;

    const newItem = {
        id: inventory.length > 0
            ? Math.max(...inventory.map(item => item.id)) + 1
            : 1,
        name,
        category,
        quantity: Number(quantity),
        price: Number(price)
    };

    inventory.push(newItem);

    res.status(201).json({
        success: true,
        message: "Item added successfully",
        data: newItem
    });
};

// Update Item
const updateItem = (req, res) => {
    const id = Number(req.params.id);

    const item = inventory.find((item) => item.id === id);

    if (!item) {
        return res.status(404).json({
            success: false,
            message: "Item not found"
        });
    }

    const { name, category, quantity, price } = req.body;

    if (name !== undefined) item.name = name;
    if (category !== undefined) item.category = category;
    if (quantity !== undefined) item.quantity = Number(quantity);
    if (price !== undefined) item.price = Number(price);

    res.status(200).json({
        success: true,
        message: "Item updated successfully",
        data: item
    });
};

// Delete Item
const deleteItem = (req, res) => {
    const id = Number(req.params.id);

    const index = inventory.findIndex((item) => item.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Item not found"
        });
    }

    inventory.splice(index, 1);

    res.status(200).json({
        success: true,
        message: "Item deleted successfully"
    });
};

module.exports = {
    getAllItems,
    getItemById,
    addItem,
    updateItem,
    deleteItem
};

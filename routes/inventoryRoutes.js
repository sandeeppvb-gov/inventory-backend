const validateItem = require("../middleware/validation");
const express = require("express");

const router = express.Router();

const {
    getAllItems,
    getItemById,
    addItem,
    updateItem,
    deleteItem
} = require("../controllers/inventoryController");

// GET - All Items
router.get("/", getAllItems);

// GET - Single Item
router.get("/:id", getItemById);

// POST - Add Item
router.post("/", validateItem, addItem);
// PUT - Update Item
router.put("/:id", validateItem, updateItem);
// DELETE - Delete Item
router.delete("/:id", deleteItem);

module.exports = router;

const errorHandler = require("./middleware/errorHandler");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Import Routes
const inventoryRoutes = require("./routes/inventoryRoutes");

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.json({
        message: "Inventory Management System API is running"
    });
});

// Inventory Routes
app.use("/api/inventory", inventoryRoutes);
app.use(errorHandler);

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

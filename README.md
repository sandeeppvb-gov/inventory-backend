
# Simple Inventory Management System

## Project Description
A backend-only Inventory Management System built using Node.js and Express.js.

This project uses JavaScript arrays for storing inventory data in runtime memory instead of a database.

## Technologies Used
- Node.js
- Express.js
- JavaScript
- dotenv
- CORS

## Features
- Add new inventory items
- View all inventory items
- View single inventory item
- Update inventory items
- Delete inventory items
- Filter items by category
- Filter items by quantity
- Search items by name
- Input validation
- Error handling

## Installation

1. Clone the repository.
2. Install dependencies:

npm install

3. Create a .env file:

PORT=5000

4. Start the development server:

npm run dev

## API Endpoints

| Method | Endpoint | Description |
| POST | /api/inventory | Add item |
| GET | /api/inventory | Get all items |
| GET | /api/inventory/:id | Get single item |
| PUT | /api/inventory/:id | Update item |
| DELETE | /api/inventory/:id | Delete item |

## Filtering and Searching

- /api/inventory?category=Electronics
- /api/inventory?quantity=10
- /api/inventory?search=Mobile

## Data Storage
Inventory data is stored in a JavaScript array during runtime.

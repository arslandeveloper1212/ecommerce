const express = require("express");
const cors = require("cors"); // Import cors
const { errorHandler } = require("./middlewares/errorMiddleware");
require("colors");
const dotenv = require("dotenv");
const connectDb = require("./config/config");
const productRoutes = require("./routes/productsRoute");
const usersRoutes = require("./routes/UsersRoute");
const orderRoutes = require("./routes/orderRoute");

// Load environment variables
dotenv.config();

const app = express();

// Enable CORS
app.use(cors()); // Use CORS middleware

// Middleware for parsing JSON
app.use(express.json());

// Connecting to MongoDB database
connectDb();

// Basic route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Node Server</h1>");
});

// API routes
app.use("/api", productRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/orders", orderRoutes);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000; // Use the PORT from environment variables or default to 5000

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

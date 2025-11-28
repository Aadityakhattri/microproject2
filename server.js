import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Microproject #2 – MEN App");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

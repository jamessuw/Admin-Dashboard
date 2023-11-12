// Import dotenv and load environment variables
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import cors module
const mongoose = require('mongoose');

const app = express();
const port = 5000;

const corsOptions = {
    origin: 'http://localhost:5000', // Update with your React app's URL
    optionsSuccessStatus: 200,
  };
  
  app.use(cors(corsOptions));
  app.use(bodyParser.json());
  
// Use environment variable for MongoDB URI
const MONGODB_URI = process.env.MONGODB_URI;

async function connect() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connect();

const purchaseOrderSchema = new mongoose.Schema({
  no: { type: Number, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, required: true },
  costPerUnit: { type: Number, required: true },
  date: { type: Date, required: true },
});

const PurchaseOrder = mongoose.model('PurchaseOrder', purchaseOrderSchema);

app.post('/api/save-purchase-order', async (req, res) => {
  try {
    const purchaseOrder = new PurchaseOrder(req.body);
    await purchaseOrder.save();
    res.status(200).json({ message: 'Purchase order data saved successfully!' });
  } catch (error) {
    console.error('Error occurred while saving purchase order data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

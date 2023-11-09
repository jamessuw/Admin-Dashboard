const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose'); // Import Mongoose
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());



// Connect to MongoDB (replace 'your-mongodb-uri' with your MongoDB connection URI)
mongoose.connect('mongodb+srv://oktober30xZ:<password>@cluster0.e67fhar.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Create a Mongoose schema for the purchase order data
const purchaseOrderSchema = new mongoose.Schema({
  no: Number,
  description: String,
  quantity: Number,
  unit: String,
  costPerUnit: Number,
  date: String,
  id: String,
  to: String,
});

// Create a Mongoose model based on the schema
const PurchaseOrder = mongoose.model('PurchaseOrder', purchaseOrderSchema);

// Route for saving purchase order data
app.post('/api/save-purchase-order', async (req, res) => {
  try {
    // Create a new PurchaseOrder instance using the data from req.body
    const purchaseOrder = new PurchaseOrder(req.body);

    // Save the purchase order data to the database
    await purchaseOrder.save();

    // Send a success response back to the client
    res.status(200).json({ message: 'Purchase order data saved successfully!' });
  } catch (error) {
    // Handle any errors and send an error response
    console.error('Error occurred while saving purchase order data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

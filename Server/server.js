const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://oktober30xZ:<password>@cluster0.e67fhar.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', (req, res) => {
  res.send('Hello, this is your root route!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

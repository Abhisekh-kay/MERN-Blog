const app = require('./app');
const mongoose = require('mongoose')
const PORT = process.env.PORT || 8080;
require('dotenv').config();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((e) => console.log(e.message));
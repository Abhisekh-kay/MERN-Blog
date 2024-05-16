const app = require('./app');
const mongoose = require('./mongoose')
const PORT = process.env.PORT || 8080;
require('dotenv').config();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mern-blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});
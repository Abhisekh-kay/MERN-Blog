const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const blogPostRoutes = require('./routes/blogpostroutes');


app.get("/", (req, res) => { 
    res.send("Sapta Code"); 
});


// Landing Page API
app.get('/api/landing-page', (req, res) => {
  const landingPageContent = {
    title: "Welcome to Sapta Code",
    description: "This is a blog",
  };
  res.json(landingPageContent);
});

app.use('/api', blogPostRoutes);

module.exports = app;

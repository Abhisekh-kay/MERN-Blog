const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());


app.get("/", (req, res) => { 
    res.send("Sapta Code"); 
});


// Landing Page API
app.get('/api/landing-page', (req, res) => {
  const landingPageContent = {
    title: "Welcome to My Blog",
    description: "This is a blog",
  };
  res.json(landingPageContent);
});

module.exports = app;

const express = require('express');
const app = express();
const port = 3000;

// Route for the root path ("/")
app.get('/', (req, res) => {
    res.send('Welcome to my website');
});

// Route for fetching and displaying product data
app.get('/sawolebi', (req, res) => {
    // Fetch product data from an API or use sample data as shown before
    // ...
    // Render a template with the fetched product data
    // ...
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});




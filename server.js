const express = require('express'); // Import express
const app = express(); // Initialize the express app
const port = 3000; // Port number

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
 
app.get('/', (req, res) => { // Define a route
    res.send('Hello World'); // Send the response
});  // Close the route




app.use((err, req, res, next) => { // Error handling middleware
    console.error(err.stack); // Log the error to the console
    res.status(500).send('Something went wrong!'); // Send a response to the client
});

app.get('/hello/:name/:surname', (req, res)=>{ // Define a route with parameters
    res.send(`Hello ${req.params.name} ${req.params.surname}`); // Send the response
});

app.get('/api/movies', (req, res) => { // Define a route
    const movies = [ // Create an array of objects
        {
            "Title": "Avengers: Infinity War", // Movie title
            "Year": "2018", // Release year
            "imdbID": "tt4154756", // IMDB ID
            "Type": "movie", // Type of media
            "Poster": "https://example.com/poster1.jpg" // Poster image
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ]; // Close the array
    res.status(201).json({ myMovies: movies }); // Send the response
});

app.post('/name', (req, res) => { // Define a route for POST requests to /index 
    res.send("Goodbye" + req.body.firstname + " " + req.body.lastname); // Send the response
});


app.get('/index', (req, res) => {  // Define a route for GET requests to /index     
    res.sendFile(__dirname+'/index.html'); // Send the index.html file
});


app.use(express.static('public')); // Serve static files from the 'public' directory

app.get('/name', (req, res) => { // Define a route for GET requests to /name 
    res.send('hello ' + req.query.firstname + " "  + req.query.lastname); // Send the response
})

app.listen(port, () => { // Make the app listen for requests on port 3000
    console.log(`Server is running on http://localhost:${port}`); // Log a message to the console
});


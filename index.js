const express = require('express'); 
const app = express(); 
const {getAllSpots} = require('./controllers/spots')
const {getAllRecipes} = require('./controllers/recipes')

const port = process.env.PORT || 3001;//*  recommended by Jorge. This way, the connection to the server will work also when the website is deployed online.

const cors = require('cors') //* CORS aims to avoid errors related to Cross-origin resource sharing
const CORSOption = {origin: process.env.ORIGIN || 'http://localhost:3000'} //* this line refers to our FRONT-END server

app.use(cors(CORSOption)) //*  this line allows the FRONT-END(port 3000) to take information from the back-end(port 3001)
app.use(express.json());


app.route('/spots').get(getAllSpots);
app.route('/recipes').get(getAllRecipes);


app.listen(port, ()=> {
    console.log(`server is listening on port ${port}`)
});
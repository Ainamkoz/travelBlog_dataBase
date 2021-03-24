const express = require('express'); 
const app = express(); 
const {getAllSpots} = require('./controllers/spots')
const {getAllRecipes} = require('./controllers/recipes')


app.use(express.json());

app.route('/spots').get(getAllSpots);
app.route('/recipes').get(getAllRecipes);


app.listen(3000, ()=> {
    console.log('server is listening on port 3000')
});
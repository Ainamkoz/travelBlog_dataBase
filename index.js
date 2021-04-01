const express = require('express'); 
const app = express(); 
const {updateSpot, getAllSpots, createSpot, deleteSpot} = require('./controllers/spots')
const {getAllRecipes} = require('./controllers/recipes')

const morgan = require ('morgan');
const urlencodedParser = require('urlencoded-parser');
if(app.get('env') != 'production') {
    app.use(morgan('dev'));
}
const port = process.env.PORT || 3001;//*  recommended by Jorge. This way, the connection to the server will work also when the website is deployed online.

const cors = require('cors') //* CORS aims to avoid errors related to Cross-origin resource sharing
const CORSOption = {origin: process.env.ORIGIN || 'http://localhost:3000'} //* this line refers to our FRONT-END server

app.use(cors(CORSOption)) //*  this line allows the FRONT-END(port 3000) to take information from the back-end(port 3001)
app.use(express.json());
app.use(urlencodedParser);

app.route('/recipes').get(getAllRecipes);
app.route('/spots').get(getAllSpots);

app.route('/spots/new').post(createSpot)
app.route('/spots/update/:id').put(updateSpot)
app.route('/spots/delete/:id').delete(deleteSpot)

app.listen(port, ()=> {
    console.log(`server is listening on port ${port}`)
});
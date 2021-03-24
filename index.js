const express = require('express'); 
const app = express(); 
const {getAllSpots} = require('./controllers/spots')

app.use(express.json());

app.route('/spots').get(getAllSpots);

app.listen(3000, ()=> {
    console.log('server is listening on port 3000')
});
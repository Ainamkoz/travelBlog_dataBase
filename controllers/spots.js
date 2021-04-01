const pool=require('../pg.js')


const getAllSpots = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM spots');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateSpot =  async (req, res) => {
  const {title, body, imgurl} = req.body
  const {id} = req.params;
  console.log(req.body)
  res.set('Access-Control-Allow-Origin', '*');

  try {
    const result = await pool.query('UPDATE spots SET title=$1, body=$2, imgurl=$3  WHERE id=$4 RETURNING*;', [title, body, imgurl, id])
    res.json(result);
    console.log(`Spot ${id} updated`)
  }
  catch(error) {console.log(error)}
}


const createSpot =  async (req, res) => {
  const {title, body, imgurl} = req.body
  console.log(req.body)
  // res.set('Access-Control-Allow-Origin', '*');
  try {
    const result = await pool.query('INSERT INTO spots VALUES ($1, $2, $3) RETURNING*;', [title, body, imgurl])
    res.json(result);
    console.log(`Spot ${id} created`)
  }
  catch(error) {console.log(error)}
}

const deleteSpot = async (req, res) => {
  const {id} = req.params;
  try {
    const result = await pool.query(`DELETE FROM spots WHERE id=$1`, [id])
    .then(console.log(`Spot ${id} deleted`))
  }
  catch(error) {console.log(error)}
}
module.exports = {updateSpot, getAllSpots, createSpot, deleteSpot};
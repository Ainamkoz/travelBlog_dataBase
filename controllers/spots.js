const pool=require('../pg.js')


const getAllSpots = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM spots');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getAllSpots};
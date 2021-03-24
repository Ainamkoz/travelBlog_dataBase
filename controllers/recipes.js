const pool=require('../pg.js')


const getAllRecipes = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM recipes');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getAllRecipes };



const db = require('../../config/db_config')

const updateUser = (req, res, next) => {
  const { id, username } = req.body

  const sql = 'UPDATE users SET username=? WHERE id=?'
  db.query(sql, [username, id], (err) => {
    if (err) return res.status(500).json({ success: false, message: err })
    next()
  })
}

module.exports = updateUser

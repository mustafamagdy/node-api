/**
 * @module controllers
 * @description Returns all general controller modules for easy access
 * @requires controllers/users
 * @returns {Object} {users}
 */
/* Custom Dependencies */
// const users = require('./users')
const system = require('./system')
module.exports = {
  // users,
  system
}

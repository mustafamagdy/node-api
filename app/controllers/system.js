const util = require('../util');
const { dateTime } = require('../util/validation');

module.exports = function (req, res) {
  return util.helpers.response(res, "success", {
    message: "Alive " + new Date()
  })
};

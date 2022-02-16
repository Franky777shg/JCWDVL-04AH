const { db } = require("../database");

module.exports = {
  generateQueryEdit: (body) => {
    let result = "";
    for (let key in body) {
      result += `${key} = ${db.escape(body[key])},`;
    }
    return result.substring(0, result.length - 1);
  },
};

const bcr = require("bcryptjs");

const hashPassword = (password) => {
  let salt = bcr.genSaltSync(10);
  return bcr.hashSync(password, salt);
};

const checkPassword = (password, hashPass) => {
  return bcr.compareSync(password, hashPass);
};

module.exports = { hashPassword, checkPassword };

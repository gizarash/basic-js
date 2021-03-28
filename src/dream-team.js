const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  if (members.length === 0) return null;
  return members.map((e) => {
    if (typeof e !== 'string') return '';
    return e.trim().charAt(0).toUpperCase();
  }).sort().join('');
};

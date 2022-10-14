const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
  let firstLetter = [];
  if (!Array.isArray(members)) return false;
  if (!members.length) return false;

  members = members.filter((el) => typeof (el) === "string");

  for (let i = 0; i < members.length; i++) {
    firstLetter.push(members[i].trim().toUpperCase().charAt(0));
  }
    let sortLetter = firstLetter.sort();
    return sortLetter.reduce((acc, cur) => acc + cur);
}

console.log(createDreamTeam(["Matt", "Ann", "Dmitry", "Max"]));

module.exports = {
  createDreamTeam
};

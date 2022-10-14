const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let season = '';

  if (!date) {
    return "Unable to determine the time of year!";
  } else if (!date.getTime) {
    throw Error("Invalid date!");
  } else if (Object.getOwnPropertyNames(date).length > 0) {
      throw Error("Invalid date!");
    }

  let getMonth = date.getMonth();

  if (getMonth == 0 ||  getMonth == 1 || getMonth == 11) {
    season = 'winter'
  } else if (getMonth == 2 || getMonth == 3 || getMonth == 4) {
    season = "spring";
  } else if (getMonth == 5 || getMonth == 6 || getMonth == 7) {
    season = "summer";
  } else if (getMonth == 8 || getMonth == 9 || getMonth == 10) {
    season = "autumn";
  }
  return season;
}

module.exports = {
  getSeason
};

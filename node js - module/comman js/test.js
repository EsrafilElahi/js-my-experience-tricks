
function log(msg) {
  console.log(`hello ${msg}`)
};

const planet = 'planet : earth';

// module.exports.log = log;
// module.exports.planet = planet;

module.exports = {
  log, planet
}
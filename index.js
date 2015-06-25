var path = require('path');

module.exports = showVersion;

function showVersion (dir) {
  var manifest = require(path.join(__dirname, dir || '', '../../package.json'));
  console.log('\n  ' + manifest.name + ' v' + manifest.version + '\n');
  process.exit(0);
}

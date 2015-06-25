var path     = require('path'),
    manifest = require(path.join(__dirname, '../../package.json'));

module.exports = showVersion;

function showVersion(){
  console.log('\n  ' + manifest.name + ' v' + manifest.version + '\n');
  process.exit(0);
}

showVersion();

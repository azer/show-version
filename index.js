var path     = require('path'),
    puts     = require('util').puts,
    manifest = require(path.join(__dirname, '../../package.json'));

module.exports = showVersion;

function showVersion(){
  puts('\n  ' + manifest.name + ' v' + manifest.version + '\n');
  process.exit(0);
}

showVersion();

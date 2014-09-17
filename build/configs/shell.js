module.exports = function (grunt) {
  var traceurCommand = './node_modules/traceur/traceur --modules=inline ';

  return {
    dist: {
      command: [
        'rm -rf dist',
        traceurCommand + '--out dist/skate.js --module src/skate.js'
      ].join(' && ')
    },
    installBower: {
      command: './node_modules/.bin/bower install'
    },
    installTraceur: {
      command: [
        'cd ./node_modules/traceur',
        'npm install'
      ].join(' && ')
    },
    test: {
      command: [
        'rm -rf .tmp',
        traceurCommand + '--out .tmp/run-unit-tests.js --module test/unit.js'
      ].join(' && ')
    }
  };
};

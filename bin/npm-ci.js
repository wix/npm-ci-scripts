#!/usr/bin/env node

const program = require('commander');

program.version(require('../../package').version)
  .command('build', 'build the package')
  .command('publish', 'publish the package')
  .command('install', 'installs dependencies')
  .command('custom', 'run custom npm command')
  .parse(process.argv);

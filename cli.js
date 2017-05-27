#!/usr/bin/env node
'use strict';
const execa = require('execa');
const chromium = require('.');

const input = process.argv.slice(2);

execa(chromium, input, {stdio: 'inherit'});

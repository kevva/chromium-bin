'use strict';
const path = require('path');
const BinWrapper = require('bin-wrapper');

const url = 'https://www.googleapis.com/download/storage/v1/b/chromium-browser-snapshots/o';
const bin = revision => ({
	darwin: `${url}/Mac%2F${revision}%2Fchrome-mac.zip?alt=media`,
	linux: `${url}/Linux_x64%2F${revision}%2Fchrome-linux.zip?alt=media`,
	win32: `${url}/Win_x64%2F${revision}%2Fchrome-win32.zip?alt=media`
});

const dest = {
	darwin: 'Chromium.app/Contents/MacOS/Chromium',
	linux: 'chrome',
	win32: 'chrome.exe'
};

module.exports = revision => new BinWrapper()
	.src(bin(revision)[process.platform], 'darwin')
	.src(bin(revision)[process.platform], 'linux')
	.src(bin(revision)[process.platform], 'win32')
	.dest(path.resolve(__dirname, '../vendor'))
	.use(dest[process.platform]);

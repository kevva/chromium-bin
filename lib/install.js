'use strict';
const got = require('got');
const log = require('logalot');
const bin = require('.');

const api = 'https://chromium.woolyss.com/api/?out=revision';
const revision = {
	darwin: `${api}&os=mac`,
	linux: `https://www.googleapis.com/download/storage/v1/b/chromium-browser-snapshots/o/Linux_x64%2FLAST_CHANGE?alt=media`,
	win32: `${api}&os=windows`
};

got(revision[process.platform])
	.then(res => {
		const b = bin(res.body);

		b.run(err => {
			if (err) {
				log.warn(err.message);
				log.warn('chromium pre-build test failed');
				return;
			}

			log.success('chromium pre-build test passed successfully');
		});
	})
	.catch(err => {
		log.warn(err.message);
	});

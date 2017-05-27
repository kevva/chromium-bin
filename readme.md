# chromium-bin [![Build Status](https://travis-ci.org/kevva/chromium-bin.svg?branch=master)](https://travis-ci.org/kevva/chromium-bin)

> Chromium wrapper that makes it seamlessly available as a local dependency


## Install

```
$ npm install --save chromium-bin
```


## Usage

```js
const {execFile} = require('child_process');
const chromium = require('chromium-bin');

execFile(chromium, ['https://github.com'], err => {
	console.log('Page opened!');
});
```


## CLI

```
$ npm install --global chromium-bin
```

```
$ chromium --help
```


## License

MIT © [Kevin Martensson](http://github.com/kevva)

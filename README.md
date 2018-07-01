# spool-winston

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Follow @FabrixApp on Twitter][twitter-image]][twitter-url]


## Install

```sh
$ npm install @fabrix/spool-winston --save
```

## Configure

```js
// config/main.js
module.exports = {
  spools: [
    // ... other spools
    require('spool-winston').WinstonSpool
  ]
}
```

[npm-image]: https://img.shields.io/npm/v/@fabrix/spool-winston.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fabrix/spool-winston
[ci-image]: https://img.shields.io/circleci/project/github/fabrix-app/spool-winston/master.svg
[ci-url]: https://circleci.com/gh/fabrix-app/spool-winston/tree/master
[daviddm-image]: http://img.shields.io/david/fabrix-app/spool-winston.svg?style=flat-square
[daviddm-url]: https://david-dm.org/fabrix-app/spool-winston
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/fabrix-app/Lobby
[twitter-image]: https://img.shields.io/twitter/follow/FabrixApp.svg?style=social
[twitter-url]: https://twitter.com/FabrixApp
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/fabrix-app/spool-winston.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/fabrix-app/spool-winston/coverage



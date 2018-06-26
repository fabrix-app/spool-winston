# spool-winston

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]


## Install

```sh
$ npm install --save spool-winston
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
[ci-image]: https://img.shields.io/circleci/project/github/fabrix-app/spool-winston/nmaster.svg
[ci-url]: https://circleci.com/gh/fabrix-app/spool-winston/tree/master
[daviddm-image]: http://img.shields.io/david/fabrix-app/spool-winston.svg?style=flat-square
[daviddm-url]: https://david-dm.org/fabrix-app/spool-winston
[codeclimate-image]: https://img.shields.io/codeclimate/github/fabrix-app/spool-winston.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/fabrix-app/spool-winston
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/fabrix-app/fabrix


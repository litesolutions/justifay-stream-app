# @justifay/choo-plugins

Library for all choo plugins in justifay frontend projects

- Full screen
- Gestures
- Offline/online detection
- Resize event
- Tabbing
- Theme
- Visibility

## Installation

```sh
$ npm i --save @justifay/choo-plugins
```

## Usage

```javascript

  const { offlineDetect: offlineDetectPlugin } = require('@justifay/choo-plugins')

  const app = choo()

  app.use(offlineDetectPlugin())

```

## License

MIT

## Author(s)

- Augustin Godiscal <auggod@justifay.is>

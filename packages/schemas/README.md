# [WIP] Justifay schemas (v2 api)

All our schemas

## Installation

```sh
$ npm i --save @justifay/schemas
```

## Usage with api v1

```javascript

const adapter = require('@justifay/schemas/adapters/v1/track')

const track = adapter({
  name: 'foo'
})

console.log(track.title) // 'foo'

```

## License

MIT

## Author(s)

- Augustin Godiscal <auggod@justifay.is>

# @justifay/search-component

## Installation

```sh
$ npm i --save @justifay/search-component
```

## Usage

```js
const html = require('choo/html')
const Search = require('@justifay/search-component')

module.exports = () => {
  return html`
    state.cache(Search, 'search-component').render({ tags: ['techno', 'electro'] })
  `
`

```

## License

MIT

## Author(s)

- Augustin Godiscal <auggod@justifay.is>

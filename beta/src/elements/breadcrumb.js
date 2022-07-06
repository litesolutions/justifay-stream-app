const html = require('choo/html')
const { iconFill } = require('@justifay/theme-skins')
const icon = require('@justifay/icon-element')

module.exports = (props) => {
  const { href, text } = props

  return html`
    <div class="flex mv3">
      <a class="link flex items-center f5 dim" href=${href}>
        ${icon('arrow', { class: iconFill, size: 'sm' })}
        <span class="b pl2">${text}</span>
      </a>
    </div>
  `
}

const html = require('choo/html')
const Component = require('choo/component')

class Footer extends Component {
  constructor (id, state, emit) {
    super(id)

    this.emit = emit
    this.state = state
    this.local = state.components[id] = {}
  }

  createElement (props) {
    return html`
      <footer
        class="footer-component bg-black white flex flex-column flex-row-reverse-l flex-row-l pt4 pb5"
      >
        <section>
          <div>
            <img
              src="https://justifay.com/wp-content/uploads/elementor/thumbs/justifay-plataforma-streaming-logos-generalitat-catalunya-ministerio-plpetjmhowxeu4ocmygnuv30z19vkck3lx21z6kkji.png"
              title="justifay plataforma streaming logos generalitat catalunya ministerio"
              alt="justifay plataforma streaming logos generalitat catalunya ministerio"
            />
          </div>
        </section>
      </footer>
    `
  }

  update () {
    return false
  }
}

module.exports = Footer

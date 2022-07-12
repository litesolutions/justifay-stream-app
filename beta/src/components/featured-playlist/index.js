const Component = require('choo/component')
const imagePlaceholder = require('@resonate/svg-image-placeholder')
const Playlist = require('@resonate/playlist-component')
const html = require('choo/html')

/**
 * Featured playlist (staff picks by default)
 */

class FeaturedPlaylist extends Component {
  constructor (id, state, emit) {
    super(id)

    this.local = state.components[id] = {}
    this.emit = emit
    this.state = state

    this.local.tracks = []
  }

  createElement (props) {
    this.local.tracks = props.tracks || []

    const { track = {} } = this.local.tracks[0] || {}

    const coverSrc = track.cover || imagePlaceholder(600, 600)

    return html`
      <div class="flex flex-column pt5 pt5-l pb4 ph0 ph4-ns">
        <h2 class="lh-title fw1 f4 ml3 ml0-ns">Lista de reproducción destacada</h2>
        <div class="flex flex-column flex-auto w-100 flex-row-l">
          <div class="flex flex-column flex-auto w-100">
            <div class="sticky top-3">
              <article class="cf">
                <div class="fl w-100">
                  <div class="db aspect-ratio aspect-ratio--1x1 bg-dark-gray bg-dark-gray--dark dim">
                    <span role="img" class="aspect-ratio--object bg-center cover" style="background-image:url(${coverSrc});"></span>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div class="flex flex-column items-start justify-start flex-auto w-100 ph3 ph0-ns">
            <div class="flex flex-column w-100 pr5 mt3 mt0-l pr0-l ph4-l">
              <h3 class="ma0 f3 lh-title fw1">
                Lista de reproducción destacada
              </h3>
              <div>
                <span class="f5">Justifay</span>
              </div>
            </div>
            <div class="flex flex-column w-100 flex-auto pr0-l pl4-l">
              <div class="playlist flex flex-column h-100">
                ${this.state.cache(Playlist, 'playlist-featured-staff-picks').render({
                  playlist: this.local.tracks,
                  hideCount: true
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }

  beforerender () {
    const cid = 'playlist-featured-staff-picks'

    let component = this.state.components[cid]

    if (!component) {
      this.state.cache(Playlist, cid)
      component = this.state.components[cid]
    }

    const { machine } = component

    machine.emit('start')
    machine.emit('resolve')
  }

  update () {
    return false
  }
}

module.exports = FeaturedPlaylist

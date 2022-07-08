const html = require('choo/html')
const { isNode } = require('browser-or-node')
const viewLayout = require('../../layouts/discover')
const tags = require('../../lib/tags')

module.exports = () => viewLayout(renderDiscover)

function renderDiscover (state, emit) {
  if (isNode) emit('prefetch:discover')

  return html`
    <section id="discover" class="flex flex-column flex-auto w-100 ph3 ph4-ns">
      <div class="mv4">
        <h2 class="di mr3 lh-title f3 fw1 v-mid">
          Justifay
        </h2>

        ${!state.user.id
          ? html`
              <a
                class="link pv2 ph3 ttu ba b--mid-gray b--dark-gray--dark f6 b"
                href="https://justifay.com/#sumate"
              >
                Join now
              </a>
            `
          : null}
      </div>

      <ul class="list ma0 pa0 pv2 flex flex-wrap mw7">
        ${tags.map(tag => {
          return html`
            <li>
              <span class="db ph3 pv1 near-black mr2 mv1 f5 br-pill bg-light-gray">#${tag}</span>
            </li>
          `
        })}
      </ul>
    </section>
  `
}

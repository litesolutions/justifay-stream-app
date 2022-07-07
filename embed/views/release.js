const html = require('choo/html')
const imagePlaceholder = require('@justifay/svg-image-placeholder')
const Playlist = require('@justifay/playlist-component')

module.exports = view

function view (state, emit) {
  const data = state.release.data || {}

  const { title, display_artist: displayArtist, creator_id: creatorId } = data

  return html`
    <div class="flex flex-auto flex-column flex-row-l pb6">
      <div class="flex flex-column w-100 w-50-l flex-auto flex-row-l">
        ${renderArtwork(state, emit)}
      </div>
      <div class="flex flex-column flex-auto w-100 w-50-l ph2 ph4-l">
        <h2 class="flex flex-column f3 fw4 lh-title ma0 mt3">
          ${title}
          <small class="f5 lh-copy">
            <a href="${process.env.APP_HOSTNAME}/artist/${creatorId}" target="_blank" class="link">${displayArtist}</a>
          </small>
        </h2>
        ${renderContent(state, emit)}
      </div>
    </div>
  `
}

function renderArtwork (state) {
  const data = state.release.data || {}

  const {
    cover,
    title
  } = data

  const src = cover || imagePlaceholder(400, 400)

  return html`
    <div class="fl w-100">
      <div class="sticky db aspect-ratio aspect-ratio--1x1 bg-gray" style="top:3rem">
        <figure class="ma0">
          <picture>
            ${cover
              ? html`
                <source srcset=${src.replace('.jpg', '.webp')} type="image/webp">
                <source srcset=${src.replace('.webp', '.jpg')} type="image/jpeg">
              `
              : ''}
            <img src=${src} width=400 height=400 class="aspect-ratio--object z-1" />
          </picture>
          <figcaption class="clip">${title}</figcaption>
        </figure>
      </div>
    </div>
  `
}

function renderContent (state, emit) {
  const data = state.release.data || {}

  const {
    label,
    release_date: date
  } = data

  return html`
    <section id="release-content" class="flex flex-column flex-auto mb4">
      ${state.cache(Playlist, `release-${state.params.id}`).render({
        type: 'album',
        hideMenu: true,
        hideCount: true,
        playlist: state.release.tracks || []
      })}
      <div class="flex flex-column">
        ${renderLabel(label)}
        ${renderReleaseDate(date)}
      </div>
    </section>
  `
}

function renderLabel (label) {
  if (!label) return

  return html`
    <dl class="flex flex-auto w-100">
      <dt class="fw1 f5 lh-copy light-gray">Label</dt>
      <dd class="ma0 fw1 f5 lh-copy flex flex-auto justify-end">${label.name}</dd>
    </dl>
  `
}

function renderReleaseDate (date) {
  if (!date) return

  return html`
    <dl class="flex flex-auto w-100">
      <dt class="f5 lh-copy b">Year</dt>
      <dd class="ma0 fw1 f5 lh-copy pl4 flex flex-auto">${new Date(date).getFullYear()}</dd>
    </dl>
  `
}

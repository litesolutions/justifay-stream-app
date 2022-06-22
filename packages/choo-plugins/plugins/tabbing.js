module.exports = userIsTabbing

function userIsTabbing () {
  return (state, emitter) => {
    emitter.on(state.events.DOMCONTENTLOADED, () => {
      window.addEventListener('keydown', handleFirstTab)
    })

    function handleFirstTab (e) {
      if (e.keyCode === 9) {
        document.body.classList.add('user-is-tabbing')

        window.removeEventListener('keydown', handleFirstTab)
        window.addEventListener('mousedown', handleMouseDownOnce)
      }
    }

    function handleMouseDownOnce () {
      document.body.classList.remove('user-is-tabbing')

      window.removeEventListener('mousedown', handleMouseDownOnce)
      window.addEventListener('keydown', handleFirstTab)
    }
  }
}

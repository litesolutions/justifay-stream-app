const separator = ' • '
const title = 'Justifay'

module.exports = (viewName) => {
  if (viewName === title) return title
  return viewName ? viewName + separator + title : title
}

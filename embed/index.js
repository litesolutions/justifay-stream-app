const choo = require('choo')
const plugins = require('@justifay/choo-plugins')
const app = choo()

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
  app.use(require('choo-service-worker/clear')())
}

app.use(require('choo-service-worker')('/sw.js', { scope: '/embed' }))

app.use(plugins.tabbing())
app.use(require('./stores/app'))

require('./routes')(app)

module.exports = app.mount('#app')

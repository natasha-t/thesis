const routeHelpers = require('./routehelpers')

module.exports.router = (app) => {
  app.post('/api/history', routeHelpers.postHistory),
  app.post('/api/users', routeHelpers.postUser)
}

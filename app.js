const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.all('*', (req, res, next) => {
  if (req.method !== 'GET') {
    res.status(403).jsonp({
      error: true,
      message: '403 Forbidden'
    })
  } else {
    next()
  }
})

server.get('/', (req, res) => {
  res.redirect('https://github.com/wgenial/br-cidades-estados-nodejs/blob/master/README.md')
})

server.use(jsonServer.rewriter({
  '/estados/:id': '/estados/:id?_embed=cidades',
  '/estados/:id/cidades': '/estados/:id?_embed=cidades',
  '/estados/:id/capital': '/estados/:id/cidades?capital=true',
  '/capitais': '/cidades?capital=true'
}))

router.render = (req, res) => {
  if (res.statusCode == 404) {
    res.jsonp({
      error: true,
      message: '404 Not Found'
    })
  } else {
    res.jsonp(res.locals.data)
  }
}

server.use(middlewares)

server.use(router)

server.listen(process.env.PORT || 3000, () => { console.log('JSON Server is running.') })

exports = module.exports = server;
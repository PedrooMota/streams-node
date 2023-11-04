import http from 'node:http'
import { json } from './middlewares/JSON.js'
import { routes } from './routes.js'

// Query Parameters: URL Stateful => Filtros, paginação, não são obrigatórios
// Route Parameters: Identificação de recurso
// Request Body: Envio de informações de um formulário (HTTPs)

// http://localhost:3333/users?userId=1

// http://localhost:3333/users/1

// POST http://locahost:3333/users

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)
  
  const route = routes.find(route => {
    return route.method == method && route.path == url
  })

  if (route) {
    return route.handler(req, res)
  }

  return res.writeHead(404).end()
})

server.listen(3333)

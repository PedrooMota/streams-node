import { randomUUID } from 'node:crypto';
import { Database } from './database.js';
import { buildRoutePath } from './utils/build-route-path.js';

// UUID => Unique Universal ID

const database = new Database()

export const routes = [

  {
    method: 'GET',
    path: buildRoutePath('/users'),
    handler: (req, res) => {
      const users = database.select('users')

      return res.end(JSON.stringify(users))
    }
  },

  {
    method: 'POST',
    path: buildRoutePath('/users'),
    handler: (req, res) => {
      const { nome, email } = req.body

      const user = {
        id: randomUUID(),
        nome,
        email,
      }

      database.insert('users', user)

      return res.writeHead(201).end()
    }
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/users/:id'),
    handler: (req, res) => {
      
      return res.end()
    }
  },

]
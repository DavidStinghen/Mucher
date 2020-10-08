import './bootstrap.js'
import express from 'express'
import helmet from 'helmet'
import RateLimit from 'express-rate-limit'

import routes from './routes.js'

class App {
  constructor () {
    this.server = express()
    this.middleswares()
    this.routes()
  }

  middleswares () {
    this.server.use(new RateLimit({ windowMs: 1000 * 60, max: 100 }))
    this.server.use(helmet())
    this.server.use(express.json())
  }

  routes () {
    this.server.use(routes)
  }
}

export default new App().server

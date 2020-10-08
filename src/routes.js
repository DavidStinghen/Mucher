import pkg from 'express'

import RecipesController from './app/controllers/RecipesController.js'

const { Router } = pkg
const routes = new Router()

routes.get('/recipes', RecipesController.index)

export default routes

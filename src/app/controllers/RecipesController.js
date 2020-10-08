import giphy from '../../services/giphy.js'
import recipes from '../../services/recipes.js'

class RecipesController {
  async index (req, res) {
    const { i } = req.query

    if (!i) {
      return res.status(401).json({ error: 'Não foi possível processar a requisição, verifique se foram informados ingredientes' })
    }

    const keys = i.split(',').sort()

    if (keys.length === 0) {
      return res.status(401).json({ error: 'Você deve informar ao menos um ingrediente' })
    }

    if (keys.length > 3) {
      return res.status(401).json({ error: 'Você deve informar no máximo três ingredientes' })
    }

    const recipeList = []
    await recipes(i)
      .then((response) => {
        if (response.data.results.length === 0) {
          return res.status(404).json({ error: 'Não foi possível encontrar receitas para os ingredientes informados' })
        } else {
          response.data.results.forEach(recipe => {
            recipeList.push({
              title: recipe.title,
              ingredients: recipe.ingredients.split(',').sort(),
              link: recipe.href
            })
          })
        }
      })
      .catch(() => {
        return res.status(500).json({ error: 'Não foi possível processar a requisição' })
      })

    for (let i = 0; i < recipeList.length; i++) {
      await giphy(recipeList[i].title)
        .then((response) => {
          recipeList[i].gif = response.data.data[0].images.original.url
        })
        .catch(() => {
          return res.status(500).json({ error: 'Não foi possível processar a requisição' })
        })
    }

    return res.status(200).json({ keywords: keys, recipes: recipeList })
  }
}

export default new RecipesController()

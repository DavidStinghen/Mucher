import axios from 'axios'

export default (params) => {
  return axios.get(process.env.RECIPES_URL, {
    params: { i: params }
  })
}

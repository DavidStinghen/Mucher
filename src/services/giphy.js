import axios from 'axios'

export default (params) => {
  const api_key = process.env.GIPHY_KEY
  const q = params
  const limit = 1

  return axios.get(process.env.GIPHY_URL, {
    params: {
      api_key,
      q,
      limit
    }
  })
}

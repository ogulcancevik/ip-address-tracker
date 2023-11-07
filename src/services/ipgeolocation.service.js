import { API_KEY } from './constants'

export const fetchIpGeolocation = async () => {
  const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}`)
  const data = await response.json()
  return data
}

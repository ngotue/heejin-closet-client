import axios from 'axios'

let baseURL

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:8081/'
} else {
  baseURL = 'https://heejin-closet-server.herokuapp.com/'
}

export const API_ENDPOINT = axios.create(
  {
    baseURL: baseURL
  }
)
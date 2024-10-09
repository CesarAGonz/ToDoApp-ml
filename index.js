import express from 'express'
import { PORT } from './config.js'

const app = express()

app.get('/', (req, res) => {
  res.send('hello world!!')
})

app.post('/login', (req, res) => {
  res.send('login successful')
})

app.post('/register', (req, res) => {})

app.post('/logout', (req, res) => {})

app.get('/protected', (req, res) => {
  res.send('protected route')
  console.log('protected route')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

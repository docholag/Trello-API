import express from 'express'

const app = express()

const hostname = 'localhost'
const PORT = 8017

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, hostname, () => {
  console.log(`Server is running on http://${hostname}:${PORT}`)
})

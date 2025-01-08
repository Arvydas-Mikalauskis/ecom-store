import express from 'express'
import dotenv from 'dotenv/config'
import products from './data/products.js'

const PORT = process.env.PORT || 5000

const app = express()

app.get('/', (req, res) => {
  res.send('API is running..')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id
  const product = products.find((p) => p._id === productId)
  res.json(product)
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

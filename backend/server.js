import express from 'express'
import dotenv from 'dotenv/config'
import connectDB from './config/db.js'
import router from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

const PORT = process.env.PORT || 5000
connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running..')
})

app.use('/api/products', router)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

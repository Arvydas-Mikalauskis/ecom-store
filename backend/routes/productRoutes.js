import express from 'express'
import Product from '../models/productModel.js'
import { getProduct, getProductById } from '../controllers/productController.js'

const router = express.Router()

router.route('/').get(getProduct)
router.route('/:id').get(getProductById)

export default router

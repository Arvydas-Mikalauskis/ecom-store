import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Rating from '../components/common/Rating'

const ProductScreen = () => {
  const [product, setProduct] = useState([])
  const { id: productID } = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${productID}`)
      setProduct(data)
    }
    fetchProduct()
  }, [productID])

  return (
    <>
      <section>
        <div className="mt-12 ml-4">
          <Link
            className="bg-slate-400 p-2 border rounded-sm text-white text-lg"
            to="/"
          >
            Go Back
          </Link>
        </div>
        <div>
          <img src={product.image} alt={product.name} />
        </div>
        <div>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </div>
        <div>{product.countInStock > 0 ? 'In stock' : 'Out of stock'}</div>
        <div>
          <button
            className="bg-blue-500 p-2"
            disabled={product.countInStock === 0}
          >
            Add to cart
          </button>
        </div>
      </section>
    </>
  )
}

export default ProductScreen

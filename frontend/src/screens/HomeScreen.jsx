import { useEffect, useState } from 'react'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')

      setProducts(data)
    }

    fetchProducts()
  }, [])

  return (
    <>
      <h1 className="py-8 text-center text-xl font-bold">Latest Products</h1>
      <div className="grid grid-cols-5 gap-10">
        {products.map((product) => (
          <div className="flex flex-col space-y-2">
            <Product product={product} />
          </div>
        ))}
      </div>
    </>
  )
}

export default HomeScreen

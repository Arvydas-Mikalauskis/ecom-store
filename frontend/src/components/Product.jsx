import { Link } from 'react-router-dom'
import Rating from './common/Rating'

const Product = ({ product }) => {
  return (
    <div>
      <div id="top">
        <h4>{product.name}</h4>
        <Link to={`product/${product._id}`}>
          <img src={product.image} alt="Product image" />
        </Link>
      </div>
      <div id="card-body">
        <div className="flex">
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
        <div>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </div>
      </div>
    </div>
  )
}

export default Product

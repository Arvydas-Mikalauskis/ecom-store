import { MdStar } from 'react-icons/md'
import { MdStarHalf } from 'react-icons/md'
import { MdOutlineStarOutline } from 'react-icons/md'

const Rating = ({ value, text }) => {
  return (
    <div className="rating">
      <span>
        {value >= 1 ? (
          <MdStar />
        ) : value >= 0.5 ? (
          <MdStarHalf />
        ) : (
          <MdOutlineStarOutline />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <MdStar />
        ) : value >= 1.5 ? (
          <MdStarHalf />
        ) : (
          <MdOutlineStarOutline />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <MdStar />
        ) : value >= 2.5 ? (
          <MdStarHalf />
        ) : (
          <MdOutlineStarOutline />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <MdStar />
        ) : value >= 3.5 ? (
          <MdStarHalf />
        ) : (
          <MdOutlineStarOutline />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <MdStar />
        ) : value >= 4.5 ? (
          <MdStarHalf />
        ) : (
          <MdOutlineStarOutline />
        )}
      </span>
      <span className="rating-text">{text && text}</span>
    </div>
  )
}

export default Rating

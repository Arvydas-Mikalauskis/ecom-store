import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className="w-full h-12 bg-gray-200 flex items-center justify-between text-lg px-2">
        <Link to={'/'}>Home</Link>
        <div className="flex space-x-4">
          <Link to={'/cart'}>Cart</Link>
          <Link to={'/login'}>Sign In</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header

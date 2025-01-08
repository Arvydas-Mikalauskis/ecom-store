import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default Layout

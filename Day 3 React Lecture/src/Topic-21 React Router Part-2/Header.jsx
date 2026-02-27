
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>LOGO</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/todos">Todos</Link>
        <Link to="/services">Services</Link>
        
      </nav>
    </div>
  )
}

export default Header

import { useNavigate } from 'react-router-dom'
import useLogout from '../../hooks/useLogout'
import useAuth from '../../hooks/useAuth'

const Navbar = () => {
  const navigate = useNavigate()
  const logout = useLogout()
  const { auth } = useAuth()

  const signOut = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <nav className='navbar flex-space-between'>
      <a href='/' className='navbar__title text-6 text-caveat-brush'>
        Linear Regression
      </a>
      {auth && (
        <ul className='flex-align-center gap-4'>
          <li>
            <p>
              Hi, <span className='text-bold'>{auth?.username}</span>
            </p>
          </li>
          <li>
            <button
              className='btn-link text-bold text-warning'
              onClick={signOut}
            >
              Sign Out
            </button>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar

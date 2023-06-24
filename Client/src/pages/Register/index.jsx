import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { Navbar, Footer, Spinner } from '../../components'
import { register } from '../../store/user/user-slice'
import { HeroSvg } from '../../assets'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')

  const { isLoading } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password !== rePassword) return toast.error("password doesn't match")
    dispatch(register({ username, password })).then((res) => {
      if (!res.error) navigate('/login')
    })
  }

  return (
    <div className='register flex-column'>
      <Spinner isLoading={isLoading} />
      <Navbar />
      <div className='register__content flex-align-center flex-justify-center gap-8'>
        <div className='register__content-left flex-column gap-8 flex-align-center'>
          <HeroSvg className='register__hero' />
          <p className='text-8 text-center text-caveat-brush'>
            Stock prediction using Linear Regression algorithm
          </p>
          <p className='text-center'>
            Easy way to predict the stock of item in single step. Say goodbye to
            complex and time-consuming processes - our intuitive interface
            simplifies the prediction process.
          </p>
        </div>
        <form
          className='register__form flex-column gap-4 text-dark'
          onSubmit={handleSubmit}
        >
          <p className='text-5 text-bold text-center'>Sign Up</p>
          <div className='flex-column gap-2'>
            <label htmlFor='username' className='text-3'>
              Username
            </label>
            <input
              type='text'
              id='username'
              className='register__input'
              placeholder='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='flex-column gap-2'>
            <label htmlFor='password' className='text-3'>
              Password
            </label>
            <input
              type='password'
              id='password'
              className='register__input'
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='flex-column gap-2'>
            <label htmlFor='re-password' className='text-3'>
              Re-type Password
            </label>
            <input
              type='password'
              id='re-password'
              className='register__input'
              placeholder='re-type password'
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
            />
          </div>
          <div className='flex flex-space-between flex-align-center'>
            <Link to='/login' className='text-3 text-underline'>
              Sudah punya akun?
            </Link>
            <button className='btn btn-primary' type='submit'>
              Sign Up
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  )
}

export default Register

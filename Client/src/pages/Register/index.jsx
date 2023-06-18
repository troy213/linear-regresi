import { Link } from 'react-router-dom'
import { Navbar, Footer } from '../../components'
import { HeroSvg } from '../../assets'

const Register = () => {
  return (
    <div className='register flex-column'>
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
        <form className='register__form flex-column gap-4 text-dark'>
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
            />
          </div>
          <div className='flex flex-space-between flex-align-center'>
            <Link to='/login' className='text-3 text-underline'>
              Sudah punya akun?
            </Link>
            <button className='btn btn-primary'>Sign Up</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  )
}

export default Register

import { Link } from 'react-router-dom'
import { Navbar, Footer } from '../../components'
import { HeroSvg } from '../../assets'

const Login = () => {
  return (
    <div className='login flex-column'>
      <Navbar />
      <div className='login__content flex-align-center flex-justify-center gap-8'>
        <div className='login__content-left flex-column gap-8 flex-align-center'>
          <HeroSvg className='login__hero' />
          <p className='text-8 text-center text-caveat-brush'>
            Stock prediction using Linear Regression algorithm
          </p>
          <p className='text-center'>
            Easy way to predict the stock of item in single step. Say goodbye to
            complex and time-consuming processes - our intuitive interface
            simplifies the prediction process.
          </p>
        </div>
        <form className='login__form flex-column gap-4 text-dark'>
          <p className='text-5 text-bold text-center'>Sign In</p>
          <div className='flex-column gap-2'>
            <label htmlFor='username' className='text-3'>
              Username
            </label>
            <input
              type='text'
              id='username'
              className='login__input'
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
              className='login__input'
              placeholder='password'
            />
          </div>
          <div className='flex flex-space-between flex-align-center'>
            <Link to='/register' className='text-3 text-underline'>
              Belum punya akun?
            </Link>
            <button className='btn btn-primary'>Sign In</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  )
}

export default Login

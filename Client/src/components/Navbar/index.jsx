const Navbar = () => {
  return (
    <nav className='navbar flex-space-between'>
      <a href='/' className='navbar__title text-6 text-caveat-brush'>
        Linear Regression
      </a>
      <ul className='flex gap-4'>
        <li>
          <p>
            Hi, <span className='text-bold'>John Doe</span>
          </p>
        </li>
        <li>
          <button className='btn-link text-bold text-warning'>Sign Out</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

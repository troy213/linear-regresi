import { Routes, Route } from 'react-router-dom'
import { Dashboard, NotFound, Login, Register } from './pages'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App

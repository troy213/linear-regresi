import { Routes, Route } from 'react-router-dom'
import PersistLogin from './utils/auth/PersistLogin'
import RequireAuth from './utils/auth/RequireAuth'
import { Dashboard, NotFound, Login, Register } from './pages'

const App = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />

      {/* private routes */}
      <Route element={<PersistLogin />}>
        <Route element={<RequireAuth />}>
          <Route path='/' element={<Dashboard />} />
        </Route>
      </Route>

      {/* 404 not found */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App

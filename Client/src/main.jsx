import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './context/AuthProvider'

import 'react-toastify/dist/ReactToastify.css'

import App from './App'
import store from './store'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer position='top-center' />
    <Router>
      <Provider store={store}>
        <AuthProvider>
          <Routes>
            <Route path='/*' element={<App />} />
          </Routes>
        </AuthProvider>
      </Provider>
    </Router>
  </React.StrictMode>
)

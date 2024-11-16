import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Error from './pages/Error-404'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <HashRouter>
      <div className='app-container'>
        <Header />
        <main className='content-wrapper'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App

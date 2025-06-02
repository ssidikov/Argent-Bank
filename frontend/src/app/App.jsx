import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import Profile from '../pages/Profile'
import Error404 from '../pages/Error-404'
import Header from '../components/Header'
import Footer from '../components/Footer'
import logo from '../assets/logo.png'

function App() {
  return (
    <HashRouter>
      <div className='app-container'>
        <Header image={logo} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App

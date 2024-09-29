import {
  Routes, Route, Link, useLocation, useNavigate, 
} from 'react-router-dom'

import Info from './routes/Info'
import Donate from './routes/Donate'
import Contact from './routes/Contact'
import Admin from './routes/Admin'

import messageServices from './services/messages'
import userServices from './services/user'
import PlaceServices from './services/places'
import Socials from './routes/Socials'
import SignUp from './routes/SignUp'
import Navbar from './components/Navbar'

const App = () => {
  const sendMessage = async (newMessage) => {
    try {
      await messageServices.create(newMessage)
      alert('Votre message a été envoyé.')

    } catch({ response }) {
      console.log(response.data)
      alert(response.data.error)
    }
  }

  const sendUser = async (newUser) => {
    try {
      await userServices.create(newUser)
      alert('Bienvenue à bord!')

    } catch({ response }) {
      console.log(response.data)
      alert(response.data.error)
    }
  }

  const sendPlace = async (newPlace) => {
    try {
      await PlaceServices.create(newPlace)
      alert("Nouveau point d'intérêt créé")

    } catch({ response }) {
      console.log(response)
      console.log(response.data)
      alert(response.data.error)
    }
  }

  return (
    <div className=''>
      <Navbar />
        <Routes>
          <Route path='/contact' element={<Contact sendMessage={sendMessage} /> } />
          <Route path='/socials' element={<Socials /> } />
          <Route path='/donate' element={<Donate />} />
          <Route path='/sign-up' element={<SignUp sendUser={sendUser} />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/' element={<Info />} componentDidMount={() => console.log('Entered /')} />
        </Routes>
    </div>
  )
}

export default App

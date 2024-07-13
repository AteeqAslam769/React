import './App.css'
import Header from './Component/Header'
import Footer from './Component/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App

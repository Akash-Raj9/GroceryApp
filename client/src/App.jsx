import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Home from './pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/Footer'

const App = () => {

  const isSellerPath = useLocation().pathname.includes("seller");

  <ToastContainer/>
  

  return (
    <div>
      {isSellerPath ? null : <Navbar/>}
      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`} >
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>
      {!isSellerPath && <Footer/>}
       <ToastContainer 
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />
    </div>
  )
}

export default App

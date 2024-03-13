import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllBlogsPage from './pages/AllBlogsPage'
import LoginPage from './pages/LoginPage'
import AddBlogPage from './pages/AddBlogPage'
import Header from './components/Header'

const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path='/' element={<AllBlogsPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/admin' element={<AddBlogPage/>} />

      </Routes>
    </React.Fragment>
  )
}

export default App
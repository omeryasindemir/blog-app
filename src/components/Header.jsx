import React from 'react'

const Header = () => {
  return (
    <React.Fragment>
        <header>
            <a href="/">Home</a>
            <a href="/login">Login</a>
            <a href="/admin">Add Blog</a>
        </header>
    </React.Fragment>
  )
}

export default Header
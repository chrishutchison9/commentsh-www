import React from 'react'
import Link from 'gatsby-link'

import logo from '../img/logo.svg'

const Navbar = () => (
  <nav id="header" className="navbar is-transparent">
    <div className="container">
      <div className="row navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: '120px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">

      </div>
      <div className="navbar-end">
      <a href="http://dashboard.comment.sh">
          Login / Signup
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar

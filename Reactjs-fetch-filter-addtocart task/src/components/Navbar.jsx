import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">SHOPPIFY</a> */}
          <h5>SHOPPIFY</h5>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <NavLink  className="nav-link" activeclassname="active" to="/">Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink  className="nav-link" activeclassname="active" to="/electronics">Electronics</NavLink>
              </li>

              <li className="nav-item">
                <NavLink  className="nav-link" activeclassname="active" to="/jewelery">Jewelery</NavLink>
              </li>

              <li className="nav-item">
                <NavLink  className="nav-link" activeclassname="active" to="/menclothing">Men's Clothing</NavLink>
              </li>

              <li className="nav-item">
                <NavLink  className="nav-link" activeclassname="active" to="/womenclothing">Women's Clothing</NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink  className="nav-link" activeclassname="active" to="/cart">Cart</NavLink>
              </li>
              
            </ul>

           
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
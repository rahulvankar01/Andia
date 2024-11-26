import React from 'react'
import {NavLink} from "react-router-dom"

const Nav = () => {
  return (
    <div>
       <div className="container">
        <div  className="manu">
            <div  className="row">
                <div  className="col-6">
                    <div  className="menu-left">
                   <img src="logo.png" alt="" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="menu-right">
                        <ul>
                            <li>
                                <NavLink to="home" id="a">home</NavLink>
                                
                            </li>
                            <li>
                               
                                <NavLink  to="Portfolio" id="a">Portfolio</NavLink>
                            </li>
                            <li>
                               
                                <NavLink  to="Blog" id="a">Blog</NavLink>
                            </li>
                            <li>
                              
                                <NavLink  to="Services" id="a">Services</NavLink>
                            </li>
                            <li>
                               
                                <NavLink  to="About" id="a">About</NavLink>
                            </li>
                            <li>
                               
                                <NavLink  to="Contact" id="a">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Nav

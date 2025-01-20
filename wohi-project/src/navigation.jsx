
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

//navigation bar 
function Navbar() {
   return (
       <Nav variant="pills" className="justify-content-center">
           <Nav.Item>
               <NavLink 
                   to="/home" 
                   className="nav-link" >
                   Home
               </NavLink>
           </Nav.Item>

           <Nav.Item>
               <NavLink 
                   to="/todo" 
                   className="nav-link" >
                   To Do
               </NavLink>
           </Nav.Item>

           <Nav.Item>
                <NavLink 
                    to="/habits" 
                    className="nav-link" >

                    Habits
                </NavLink>
           </Nav.Item>
       </Nav>
   );
}

export default Navbar;

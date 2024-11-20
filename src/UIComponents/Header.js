
import foodLogo from "../../public/Assets/images/Food_Deliver.png";
import { useState } from "react";
import { Link } from 'react-router-dom';


const HeaderComponent = () =>{

    return (
    <div className="header">
       <div className="img-container">
          <img className="logo" src={foodLogo} />
       </div>
       <div className="nav-container">
          <ul>
             <li>
               <Link to="/">
               Home
               </Link>
               </li>
             <li>
               <Link to="/about">About</Link>
             </li>
             <li>
               <Link to="/contact">
               Contact Us
               </Link>
               </li>
             <Link to='/login'>
             <button className="lgnbtn">Logout</button>
             </Link>
          </ul>
       </div>
    </div>
    );
  }
  export default HeaderComponent
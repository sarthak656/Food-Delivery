
import foodLogo from "../../public/Assets/images/Food_Deliver.png";
import { useState } from "react";

const HeaderComponent = () =>{
   const [btnvalue, setBtnvalue] = useState('Login');
   const [colorflag, setColorFlag] = useState(true);
   const login = () =>{
    (btnvalue === 'Login') ? setBtnvalue('Logout') : setBtnvalue('Login')
   }

    return (
    <div className="header">
       <div className="img-container">
          <img className="logo" src={foodLogo} />
       </div>
       <div className="nav-container">
          <ul>
             <li>Home</li>
             <li>About</li>
             <li>Contact Us</li>
             <li>Cart</li>
             <button className="lgnbtn" style={{backgroundColor: (btnvalue === 'Login')? 'green' : 'red'}} onClick={login}>{btnvalue}</button>
          </ul>
       </div>
    </div>
    );
  }
  export default HeaderComponent
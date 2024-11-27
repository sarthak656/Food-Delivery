
import foodLogo from "../../public/Assets/images/Food_Deliver.png";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";


const HeaderComponent = () =>{
const onlinestatus = useOnlineStatus();
    return (
    <div className="row bg-blue-300">
       <div className="col-lg-6 col-sm-6 col-xs-6  mt-2">
          <img className="w-20 ml-2" src={foodLogo} />
       </div>
       <div className="col-lg-6 col-sm-6 col-xs-6 my-3 ">
          <ul className="flex flex-wrap ml-20 justify-between font-semibold">
            <li>Online status {onlinestatus ? "🟢" : "🔴"}</li>
             <li>
               <Link to="/app">
               Home
               </Link>
               </li>
             <li>
               <Link to="about">About</Link>
             </li>
             <li>
               <Link to="contact">
               Contact Us
               </Link>
               </li>
               <li>
                  <Link to="grocery">Grocery</Link>
               </li>
               <li>
             <Link to='/'>
             <button className="mr-2 bg-red-500 w-20 rounded text-slate-300" onClick={() => window.confirm("Are you sure you want to log out?")}>Logout</button>
             </Link>
             </li>
          </ul>
       </div>
    </div>
    );
  }
  export default HeaderComponent
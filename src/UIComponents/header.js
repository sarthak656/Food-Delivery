
import foodLogo from "../../public/Assets/images/Food_Deliver.png";

const HeaderComponent = () =>{
    return (
    <div className="header">
       <div className="img-container">
          <img className="logo" src={foodLogo} />
       </div>
       <div className="nav-conatainer">
          <ul>
             <li>Home</li>
             <li>About</li>
             <li>Contact Us</li>
             <li>Cart</li>
          </ul>
       </div>
    </div>
    );
  }
  export default HeaderComponent
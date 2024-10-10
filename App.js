import React from "react";
import  ReactDOM  from "react-dom/client";
import logo from "./Assets/images/Logo.png";
import foodLogo from "./Assets/images/Food_Deliver.png";
import burger from "./Assets/images/burger.png";

 const Search = () => {
  return (<div>
     {/* <img src={logo} style={{width:"350px",height:"300px"}} alt="logoimg" /> */}
     <div>
      <form>
      <input type="text" name="search" placeholder="Search"  className="search-input"></input>
      </form>
     </div>
  </div>
  )
 } 
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
 
 const RestaurantCard = () =>{
   return (
      <div className="res-card">  
      <img alt="res-logo" className="res-logo" src={burger} />
      <h2>Drink Lab</h2>
      <h3>4.4 stars</h3>
      <h4>30Mins</h4>
      <h4>burger,cheese,tasty</h4>
      </div>
     );
   }

 const BodyComponent = () =>{
   return (
      <div className="res-container">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      </div>
   );
 }

 const AppLayout = () => {
   return (
   <div className="App">
      <HeaderComponent />
      <BodyComponent />
   </div>
   );
   }
   
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout />)
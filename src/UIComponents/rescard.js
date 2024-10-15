import { CDN_URL } from "../utils/constants";  //named imports

const RestaurantCard = (props) =>{  
  const { resobj } = props; //Destructuring the props(destructuring the objects)
  console.log(resobj); 

  //destructuring assignment - and used optional chaining(?. which checks helps prevent runtime errors that can occur when trying to access properties on null or undefined)
  const {cloudinaryImageId,name,costForTwo,avgRating,cuisines} = resobj?.info
  const {deliveryTime} = resobj?.info.sla
    return (
      <div className="res-card" >  
       <img alt="res-logo" className="res-logo" src={CDN_URL + cloudinaryImageId} />
       <h2>{name}</h2>
       <h3>{costForTwo}</h3>
       <h3>{avgRating}</h3>
       <h4>{deliveryTime}</h4>
       <h4>{cuisines}</h4> 
     </div>
      );
    }
export default RestaurantCard
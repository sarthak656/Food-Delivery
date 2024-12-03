import { CDN_URL1 } from "../utils/constants"; 

const RestaurantCard = (props) =>{  
  const { resobj } = props; //Destructuring the props(destructuring the objects)
  //destructuring assignment - and used optional chaining(?. which checks helps prevent runtime errors that can occur when trying to access properties on null or undefined)
  const {cloudinaryImageId,name,costForTwo,avgRating,cuisines} = resobj
  const {deliveryTime} = resobj?.sla
  
    return (
      <div className="m-2 p-2 w-[250px] h-60  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 truncate ">  
       <img alt="res-logo" className="w-32 h-32 rounded-lg flex justify-center" src={CDN_URL1 + cloudinaryImageId} />
       <h2 className="font-bold text-lg truncate">{name}</h2>
       <h3 className="truncate ">{costForTwo}</h3>
       <h3 className="truncate">{avgRating}⭐ </h3>
       <h4 className="truncate font-extrabold">{deliveryTime}Minutes</h4> 
       <h4 className="truncate text-gray-500">{cuisines.join(',')}</h4> 
     </div>
      );
    }

//Higher Order component 
export const withPropmotedLabel = (RestaurantCard) => {
  return (props)=>{
   return(
    <div className="relative">
    <label className='text-sm absolute ml-4 border bg-green-500 text-white p-1'>One Free Delivery</label>
    <RestaurantCard {...props}/>
    </div>
   )
  }
}


export default RestaurantCard


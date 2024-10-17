import RestaurantCard from '../../src/UIComponents/rescard.js';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

const BodyComponent = () =>{

const [listRestaurants,setListRestaurants ] = useState([]);
const [fulllist,setFullList] = useState([]);
const [loading,setLoading] = useState(true);


useEffect( () =>{
fetchData();
},[]);

//fetch data from API
const fetchData = async() => {
   try{
   const response= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9141417&lng=74.8559568&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
   const data = await response.json();
   setListRestaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  //optional chaining
   setFullList(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   }
   catch(error){
      console.log(error);
   }
   finally {
      setLoading(false);  
    }
}

//filter method
const filter = ()=> {
   const filteredlist = listRestaurants.filter(res => res.info.avgRating>4.4)
   setListRestaurants(filteredlist)
}
 
//search method
const handleInput= (event) =>{
const value = event.target.value;
if(value === ''){
   setListRestaurants(fulllist);
}
else{
   const newFilteredList = fulllist.filter(res => res.info.name.toLowerCase().includes(value.toLowerCase())); 
   setListRestaurants(newFilteredList);
}
}

return (
   <>
     {loading ? (
       <div className='Loading'>
         <CircularProgress />
       </div>
     ) : listRestaurants.length === 0 ? (
       <div className='nodata'>
         NO DATA FOUND
       </div>
     ) : (
       <>
         {/* Search and filter */}
         <div className='row'>
           <div className='col-lg-6 col-sm-6 col-6'>
             <input 
               className='input' 
               placeholder='Search...' 
               onChange={handleInput}
             />
           </div>
           <div className='col-lg-6 col-sm-6 col-6 btn-cont'>
             <button className='btn-cls' onClick={filter}>
               Top Rating Filter
             </button>
           </div>
         </div>
 
         {/* Restaurant list */}
         <div className="res-container">
           {listRestaurants.map((item) => (
             <RestaurantCard 
               resobj={item.info} 
               key={item.info.id} 
             />
           ))}
         </div>
       </>
     )}
   </>
 );
  }

  export default BodyComponent
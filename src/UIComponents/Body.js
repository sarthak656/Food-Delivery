import RestaurantCard from './Rescard.js';
import { useEffect, useState } from 'react';
import Shimmerui from './Shimmerui.js';
import searchimg from '../../public/Assets/images/search.svg';
import { Link } from 'react-router-dom';

const Body = () =>{

const [listRestaurants,setListRestaurants ] = useState([]);
const [fulllist,setFullList] = useState([]);
const [loading,setLoading] = useState(true);

//if no dependency array => useEffect is called on every render.
//if dependency array is empty = [] => useEffect is called on initial render(just once)
//if dependency array is any variable => useEffect is called everytime when it is updated
useEffect( () =>{
fetchData();
},[]);

//fetch data from API
const fetchData = async() => {
   try{
   const response= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9141417&lng=74.8559568&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
   const data = await response.json();
   setListRestaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  //optional chaining
   //The copy variable stores the original, unfiltered dataset. This allows each new search to begin from the full dataset rather than the already filtered results, ensuring that all data is considered for every new search input, even after previous filters have been applied
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
   const newFilteredList = fulllist.filter(res => res.info.name.toLowerCase().includes(value.toLowerCase())); 
   setListRestaurants(newFilteredList);

}

return (
       <>
         {/* Search and filter */}
         <div className='row'>
           <div className='col-lg-6 col-sm-6 col-6'>
         <div className='input-container'>
         <img style={{width:'20px',height:'20px'}} src={searchimg} alt="searchimg"/>
             <input 
               className='input' 
               placeholder='Search...' 
               onChange={handleInput}
             />
               
                </div>
           </div>
           <div className='col-lg-6 col-sm-6 col-6 btn-cont'>
             <button className='btn-cls' onClick={filter}>
               Top Rating Filter
             </button>
           </div>
         </div>
 
         {/* Restaurant list */}
         {loading ? (
       <div>
         <Shimmerui />
       </div>
     ) : listRestaurants.length === 0 ? (
       <div className='nodata'>
         NO DATA FOUND
       </div>
     ) : (
         <div className="res-container">
           {listRestaurants.map((item) => (
            <Link key={item.info.id} className="no-underline"
            to={"/restaurants/" + item.info.id}> {/** in jsx key should be on the parent jsx that is mapped */}
             <RestaurantCard 
               resobj={item.info} 
             />
             </Link>
           ))}
         </div>
       
     )}
   </>
 );
  }

  export default Body
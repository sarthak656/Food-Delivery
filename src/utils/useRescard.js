import {useState, useEffect} from 'react';
import { CDN_URL } from "../utils/constants";  //named imports

const useRescard = () =>{
const [listRestaurants,setListRestaurants ] = useState([]);
const [fulllist,setFullList] = useState([]);
const [loading,setLoading] = useState(true)
 
    useEffect( () =>{
    fetchData();
    },[]);
    
    //fetch data from API
    const fetchData = async() => {
       try{
       const response= await fetch(CDN_URL);
       const data = await response.json();
       const restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
       setListRestaurants(restaurants);
       setFullList(restaurants);
       }
       catch(error){
          console.log(error);
       }
       finally {
        setLoading(false);
        }
    }

    //filter method
    const filter = () => {
        const filteredList = fulllist.filter((res) => res.info.avgRating > 4);
        setListRestaurants(filteredList);
      };
    
      //search method
      const handleInput= (event) =>{
        const value = event.target.value;
           const newFilteredList = fulllist.filter(res => res.info.name.toLowerCase().includes(value.toLowerCase())); 
           setListRestaurants(newFilteredList);
        
        }

    return { listRestaurants, loading, filter, handleInput };
}

export default useRescard
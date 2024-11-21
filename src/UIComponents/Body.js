import RestaurantCard from './Rescard.js';
import Shimmerui from './Shimmerui.js';
import searchimg from '../../public/Assets/images/search.svg';
import { Link } from 'react-router-dom';
import useRescard from '../utils/useRescard'
import useOnlineStatus from '../utils/useOnlineStatus.js';

const Body = () =>{
  
const { listRestaurants, loading, filter, handleInput } = useRescard(); //custom hook
const isOnline = useOnlineStatus(); //custom hook
if(isOnline === false) return <h1>You are offline,please check you network</h1>

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
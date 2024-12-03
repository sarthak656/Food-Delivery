import RestaurantCard, { withPropmotedLabel } from './Rescard.js';
import Shimmerui from './Shimmerui.js';
import searchimg from '../../public/Assets/images/search.svg';
import { Link } from 'react-router-dom';
import useRescard from '../utils/useRescard'
import useOnlineStatus from '../utils/useOnlineStatus.js';

const Body = () =>{
const { listRestaurants, loading, filter, handleInput } = useRescard(); //custom hook
const isOnline = useOnlineStatus(); //custom hook
const Restaurantpromoted = withPropmotedLabel(RestaurantCard)
if(isOnline === false) return <h1 className='flex justify-center my-24 font-extrabold text-2xl'>You are offline,please check you network 😕</h1>

return (
       <>
         {/* Search and filter */}
         <div className='row'>

            <div className='col-lg-3 col-sm-6 col-6 mt-2 p-2 ml-6  border flex flex-wrap'>
             <img  className='w-5 h-5 mr-2' src={searchimg} alt="searchimg"/>
             <input  
               placeholder='Search...' 
               onChange={handleInput} className='outline-none text-gray-700' /> 
            </div>
          
           <div className='col-lg-6 col-sm-6 col-6 flex items-center'>
             <button className='py-1 px-1 rounded-lg text-white my-2 border bg-green-500' onClick={filter}>
               Top Rated 🌟
             </button>
           </div>

         </div>
 

         {/* Restaurant list */}
         {loading ? (
       <div>
         <Shimmerui bodyFlag={true} />
       </div>
     ) : listRestaurants.length === 0 ? (
       <div className=' flex justify-center my-24'>
         No Restaurant Found 😕
       </div>
     ) : (
         <div className='flex flex-wrap justify-center'>
           {listRestaurants.map((item) => (
            <Link key={item.info.id} className="no-underline "
            to={"restaurants/" + item.info.id}> {/** in jsx key should be on the parent jsx that is mapped */}
            {(item.info.sla.lastMileTravel < 4) ? <Restaurantpromoted  resobj={item.info} /> :
             <RestaurantCard 
               resobj={item.info} 
             />}
             </Link>
           ))}
         </div>
       
     )}
   </>
 );
  }

  export default Body
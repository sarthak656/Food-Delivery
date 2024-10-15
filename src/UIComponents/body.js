import RestaurantCard from '../../src/UIComponents/rescard.js';
import resObj from '../utils/mockdata.js';
const BodyComponent = () =>{
const ApiList = resObj.restaurants;
    return (
       <div className="res-container">
         {
         ApiList.map((item) => {
            return(
            <RestaurantCard 
            resobj={ item }  key={item.info.id} />
            )
         }
         )
       }
       </div>
    );
  }

  export default BodyComponent
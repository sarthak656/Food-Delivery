import RestaurantCard from '../../src/UIComponents/rescard.js';
import resObj from '../utils/mockdata.js';
import { useState } from 'react';

const BodyComponent = () =>{

const [list,setList ] = useState(resObj.restaurants)

const filterList = () =>{
   Apilist = ApiList.filter(item =>
      item.info.avgRating > 4.4,
      
      )
      console.log(Apilist)
   // setList(list)
}
const filter = ()=> {
   const filteredlist = list.filter(res => res.info.avgRating>4.4)
   setList(filteredlist)
}

    return (
      <>
      <button className='btn-cls' onClick = {filter}>Top Rating Filter</button>

       <div className="res-container">
         {
         list.map((item) => {
            return(
            <RestaurantCard 
            resobj={ item.info }  key={item.info.id} />
            )
         }
         )
       }
       </div>
       </>
    );
  }

  export default BodyComponent
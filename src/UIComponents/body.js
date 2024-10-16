import RestaurantCard from '../../src/UIComponents/rescard.js';
import resObj from '../utils/mockdata.js';

import { useState } from 'react';

const BodyComponent = () =>{

const [list,setList ] = useState(resObj.restaurants);
const [fulllist,setFullList] = useState(resObj.restaurants);


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
 
const handleInput= (event) =>{
console.log(event.target.value)
const value = event.target.value;
if(value === ''){
   setList(fulllist);
}
else{
   const newFilteredList = fulllist.filter(res => res.info.name.toLowerCase().includes(value.toLowerCase())); 
   setList(newFilteredList);
}

}
    return (
      <>
      <div className='row'>
         <div className='col-lg-6 col-sm-6 col-6'>
            <input className='input' placeholder='search...' onChange={handleInput}></input>
         </div>
         <div className='col-lg-6 col-sm-6 col-6 btn-cont'>
      <button className='btn-cls' onClick = {filter}>Top Rating Filter</button>
      </div>
      </div>

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
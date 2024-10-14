import React from "react";
const RestaurantCard = (props) =>{  
  const { resobj } = props;  //Destructuring the props(destructuring the objects)
  var list = resobj.restaurants;
  console.log(list);
    return (
       <React.Fragment>
       {list.map((item) => {  //.map() function, the second argument is automatically the index of the current element,
        let info = item.info;
        return(
          <div className="res-card" key={info.id}>  
       <img alt="res-logo" className="res-logo" src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + info.
cloudinaryImageId} />
        <h2>{info.name}</h2>
        <h3>{info.costForTwo}</h3>
       <h3>{info.avgRating}</h3>
       <h4>{info.sla.deliveryTime}</h4>
       <h4>{info.cuisines}</h4> 
     </div>
        );
       })}
       </React.Fragment>
      );
    }
export default RestaurantCard

const RestaurantCard = (props) =>{
    return (
       <div className="res-card">  
       <img alt="res-logo" className="res-logo" src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b94ca925fd7a80799b39e5552ca8bf72' />
       <h2>{props.resname}</h2>
       <h3>4.4 stars</h3>
       <h4>30Mins</h4>
       <h4>{props.cuisines}</h4>
       </div>
      );
    }
export default RestaurantCard
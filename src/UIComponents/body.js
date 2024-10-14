import RestaurantCard from '../../src/UIComponents/rescard.js'
const BodyComponent = () =>{
    return (
       <div className="res-container">
       <RestaurantCard 
       resname="Meghana foods"
       cuisines="Biriyani,Asian,North Indian"/>
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
       </div>
    );
  }
  export default BodyComponent
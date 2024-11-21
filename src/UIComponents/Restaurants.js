import Shimmerui from './Shimmerui';
import { useParams } from 'react-router-dom';
import useRestaurantsMenu from '../utils/useRestaurantsMenu';

const Restaurants = () => {
  const {resId} = useParams(); //is a hook for accessing route parameters such as ID or slug from the URL.
  const resInfo = useRestaurantsMenu(resId) // custom hook
  let itemCards;
 
 
  // If data is still loading, show Shimmerui
  if (resInfo === null) {
    return <Shimmerui />;
  }

  // Destructuring resInfo once it's available
  const { name, areaName, avgRating, costForTwoMessage, cuisines } = resInfo?.cards[2]?.card?.card?.info;
  const cardData = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card;

  if (cardData?.itemCards) {
  itemCards = cardData.itemCards;
  } else if (cardData?.categories?.[0]?.itemCards) {
  itemCards = cardData.categories[0].itemCards;
  }
 
  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ fontSize: '22px',fontWeight:'bold' }}>{name}</div>
      <div>{avgRating}</div>
      <div>{areaName}</div>
      <div>{costForTwoMessage}</div>
      <div>{cuisines?.join(',')}</div>
    </div>

    <div className='res-container-in'>
      {itemCards?.map((item) => {
       const { id, name, category, description } = item?.card?.info || {}; // Destructure safely
        return (
        <div key={id} className="res-card-in">
          <div style={{fontSize:'17px',fontWeight:'bold'}}>{name && <li>{name}</li>}</div> 
          {/* Short-Circuit Rendering: */}
          
          <div>{category && <li>{category}</li>}</div>
          <div>{description && <li>{description}</li>}</div>
        </div>
        );
      })}
    </div>

  </>
  );
};

export default Restaurants;

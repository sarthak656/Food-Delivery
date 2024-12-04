import Shimmerui from './Shimmerui';
import { useParams } from 'react-router-dom';
import useRestaurantsMenu from '../utils/useRestaurantsMenu';
import ItemCards from './ItemCards';

const Fooditem = () => {
  const {resId} = useParams(); //is a hook for accessing route parameters such as ID or slug from the URL.
  const resInfo = useRestaurantsMenu(resId) // custom hook
  let itemCards;
  const fooditemFlag = true;
 
 
  // If data is still loading, show Shimmerui
  if (resInfo === null) {
    return <Shimmerui fooditemFlag={true}/>;
  }

  //Destructuring resInfo once it's available
  const { name, areaName, avgRating, costForTwoMessage, cuisines, totalRatingsString } = resInfo?.cards[2]?.card?.card?.info;

  const  deliveryTime = resInfo?.cards[2]?.card?.card?.info?.sla?.slaString
  const cardData = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const itemCategory = cardData.filter((item) => (
    item?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  )
  );

  
  //console.log(itemCategory)
  // if (itemCategory?.itemCards) {
  // itemCards = itemCategory.itemCards;
 
  // } else if (itemCategory?.categories?.[0]?.itemCards) {
  // itemCards = itemCategory.categories[0].itemCards;

  // }

 
  return (
    <>
    <div className='flex justify-center flex-column items-center '>
      <div className='font-bold text-2xl p-2'>{name}</div>
      <div className='border rounded-2xl p-3 w-96 '>
      <div className='font-bold p-2'>⭐{avgRating}({totalRatingsString}) ⚬{costForTwoMessage}</div>
      <div className='text-red-600 underline p-2'>{cuisines?.join(',')}</div>
      
      <span className='font-bold p-2'>Outlet </span><span className='text-gray-500'> 📍{areaName}</span>
      <div className='text-gray-500 p-2'>{deliveryTime}</div>
      
      </div>
    </div>
    {
      itemCategory.map((item) =>(
         newitems = item?.card,
         <div key={item?.card?.card.title}>
        <ItemCards items={newitems}/>
        </div>
      )
        )
    }

  </>
  );
};

export default Fooditem;

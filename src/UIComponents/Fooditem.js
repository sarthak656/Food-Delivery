import Shimmerui from './Shimmerui';
import { useParams } from 'react-router-dom';
import useRestaurantsMenu from '../utils/useRestaurantsMenu';
import { IMG_URL } from '../utils/constants';

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
  const cardData = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card;
  if (cardData?.itemCards) {
  itemCards = cardData.itemCards;
  } else if (cardData?.categories?.[0]?.itemCards) {
  itemCards = cardData.categories[0].itemCards;
  }

 
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

    <div className='m-4 px-60 '>
      {itemCards?.map((item) => {
       const { id, name, category, description } = item?.card?.info || {}; // Destructure safely
       const { vegClassifier } = item?.card?.info.itemAttribute;
       const { isBestseller, price, imageId } = item?.card?.info
        return (
          <div key={id} className="border rounded-2xl m-2 p-2 w-[800px] list-none grid grid-cols-3 gap-4">
          <div className='col-span-2'>
            <span className='text-xs'>{vegClassifier === 'NONVEG' ? '🔴' : '🟢'}</span>
            <span className='text-red-400 text-sm'>{isBestseller ? '🔥 BestSeller' : ''}</span>
            <div className='font-bold'>{name && <li>{name}</li>}</div> 
            <div className='font-bold'>₹{(price / 100)}</div>
            <div className='text-gray-500'>{category && <li>{category}</li>}</div>
            <div className='text-gray-500'>{description && <li>{description}</li>}</div>
          </div>
          <div className='col-span-1'>
            {imageId ? <img alt='img' className='w-24 h-24 m-4' src={IMG_URL + imageId} /> : null}
          </div>
        </div>
        
        );
      })}
    </div>

  </>
  );
};

export default Fooditem;

import { RES_URL } from '.././utils/constants';
import { useState, useEffect} from 'react';
import Shimmerui from './Shimmerui';
import { useParams } from 'react-router-dom';

const Restaurants = () => {
  const [resinfo, setResinfo] = useState(null);
  const {resId} = useParams(); //is a hook for accessing route parameters such as ID or slug from the URL.
  let itemCards;

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    try {
      const response = await fetch(RES_URL+resId);
      const json = await response.json();
      setResinfo(json.data);
    } catch (err) {
      console.log(err);
    }
  };

  // If data is still loading, show Shimmerui
  if (resinfo === null) {
    return <Shimmerui />;
  }

  // Destructuring resinfo once it's available
  const { name, areaName, avgRating, costForTwoMessage, cuisines } = resinfo?.cards[2]?.card?.card?.info;
  const cardData = resinfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card;

  if (cardData?.itemCards) {
  itemCards = cardData.itemCards;
  } else if (cardData?.categories?.[0]?.itemCards) {
  itemCards = cardData.categories[0].itemCards;
  }
 
  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ fontSize: '22px' }}>{name}</div>
      <div>{avgRating}</div>
      <div>{areaName}</div>
      <div>{costForTwoMessage}</div>
      <div>{cuisines?.join(',')}</div>
    </div>

    <div>
  {itemCards?.map((item) => {
    const { id, name, category, description } = item?.card?.info || {}; // Destructure safely
    return (
      <ul key={id}>
        {name && <li>{name}</li>}  {/**Short-Circuit Rendering: */}
        {category && <li>{category}</li>}
        {description && <li>{description}</li>}
      </ul>
    );
  })}
</div>

    </>
  );
};

export default Restaurants;

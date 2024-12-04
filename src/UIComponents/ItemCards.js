import Items from "./Items";
import { useState } from 'react';

const ItemCards = (props) => {
    const [ accord, setAccord ] = useState(false);   //used flag to enable accordian(An accordion is a user interface component that allows content to be expanded or collapsed, providing a compact way to display information)
    const { card } = props.items;
    const ItemCards = card.itemCards;
    const handleItemClick = () => {
      setAccord(!accord); 
    }

    return (
        <div className='m-4 px-60 '>
          <div className="flex justify-center" onClick={handleItemClick}>
           <div className='w-full flex justify-between  border-b-8  border-gray-200 p-2'>
               <span className='w-9/3 font-bold text-lg'>{card.title}({card.itemCards.length})</span>
               <span className='w-9/3'>🔽</span>
           </div>
           </div>
        {
          accord ?                                   //if true expand else collapse
         ItemCards.map(item => (
          <div key={item?.card?.info?.id}>
            <Items itemCardsInfo={item.card.info}/>
          </div>
        )) : <></>
       }
       </div>
      );
}
export default ItemCards
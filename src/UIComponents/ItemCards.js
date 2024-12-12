import Items from "./Items";
import { useState } from 'react';

const ItemCards = (props) => {
    const { card } = props.items;
    const { showItems } = props;
    const { setShowind } = props;
    // const [show,setShow] = useState();
    const ItemCards = card.itemCards;
    const handleItemClick = () => {
      setShowind();    
      //console.log(showItems)
     
      // setAccord(!accord);   //uncontrolled components
    }

    return (
        <div className='m-4 px-60 '>
          <div className="flex justify-center cursor-pointer" onClick={handleItemClick}>
           <div className='w-full flex justify-between  border-b-8  border-gray-200 p-2'>
               <span className='w-9/3 font-bold text-lg'>{card.title}({card.itemCards.length})</span>
               <span className='w-9/3'>🔽</span>
           </div>
           </div>
        {/* {
          console.log(showItems)
        } */}
         {  showItems ?                                   //if true expand else collapse
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
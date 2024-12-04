import { IMG_URL } from '../utils/constants';

const Items = (props) => {
const { itemCardsInfo } = props
   
    return(
        <>
                <div  className="border rounded-2xl m-2 p-2 w-[750px] list-none grid grid-cols-4 gap-4">
                <div className='col-span-3'>
                  <span className='text-xs'>{itemCardsInfo?.vegClassifier === 'NONVEG' ? '🔴' : '🟢'}</span>
                  <span className='text-red-400 text-sm'>{itemCardsInfo?.isBestseller ? '🔥 BestSeller' : ''}</span>
                  <div className='font-bold'>{itemCardsInfo?.name && <li>{itemCardsInfo?.name}</li>}</div> 
                  <div className='font-bold'>₹{((itemCardsInfo?.price) ? (itemCardsInfo?.price / 100) : (itemCardsInfo?.defaultPrice /100))}</div>
                  <div className='text-gray-500'>{itemCardsInfo?.category && <li>{itemCardsInfo?.category}</li>}</div>
                  <div className='text-gray-500'>{itemCardsInfo?.description && <li>{itemCardsInfo?.description}</li>}</div>
                </div>
                <div className='col-span-1'>
                  {itemCardsInfo?.imageId ? <img alt='img' className='w-24 h-24 m-4' src={IMG_URL + itemCardsInfo?.imageId} /> : null}
                </div>
              </div>

            </>
    );
}
export default Items
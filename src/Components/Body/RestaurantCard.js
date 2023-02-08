import { useContext } from 'react';
import TitleContext from '../../context/TitleContext';
import { IMG_URL } from '../../config';

const RestaurantCard = ({
  name,
  cloudinaryImageId: imageID,
  avgRating: rating,
  locality,
  cuisines,
}) => {
  const { title } = useContext(TitleContext);
  return (
    <div className='w-64 h-80 m-10 shadow-md hover:-translate-y-2 hover:shadow-xl'>
      <div>
        <img
          src={`${IMG_URL}/${imageID}`}
          alt={name}
          className='w-full h-full'
        />
      </div>
      <div className='flex flex-col flex-wrap text-center'>
        <p className='font-bold text-lg'>{name}</p>
        <div className='flex flex-wrap mx-auto'>
          {cuisines.map((cue, i) => (
            <span key={i} className='ml-2'>
              {cue}
            </span>
          ))}
        </div>
        <p>{locality}</p>
        <p>{rating}</p>
        <p className='text-gray-400'>{title}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;

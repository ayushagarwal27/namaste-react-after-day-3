import { IMG_URL } from '../../config';

const RestaurantCard = ({
  name,
  cloudinaryImageId: imageID,
  avgRating: rating,
  locality,
  cuisines,
}) => {
  return (
    <div className='res-card'>
      <div className='res-img'>
        <img src={`${IMG_URL}/${imageID}`} alt={name} />
      </div>
      <div className='res-info'>
        <p>{name}</p>
        {cuisines.map((cue, i) => (
          <span key={i} className='cue'>
            {cue}
          </span>
        ))}
        <p>{locality}</p>
        <p>{rating}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;

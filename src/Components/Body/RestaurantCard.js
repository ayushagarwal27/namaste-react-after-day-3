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
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${imageID}`}
          alt={name}
        />
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

const RestaurantCard = ({ name, image, locality, rating, cuisine }) => {
  return (
    <div className='res-card'>
      <div className='res-img'>
        <img src={image?.url} alt={name} />
      </div>
      <div className='res-info'>
        <p>{name}</p>
        {cuisine.map((cue, i) => (
          <span key={i} className='cue'>
            {cue.name}
          </span>
        ))}
        <p>{locality?.address}</p>
        <p>{rating?.rating_text}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
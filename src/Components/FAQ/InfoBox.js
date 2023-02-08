const InfoBox = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className='border border-black my-2 w-3/4 mx-auto p-4 rounded-md flex justify-between'>
      <div>
        <h3 className='font-bold text-2xl'>{title}</h3>
        {isVisible && <p>{description}</p>}
      </div>
      <button onClick={setIsVisible}>{isVisible ? '▽' : '△'}</button>
    </div>
  );
};

export default InfoBox;

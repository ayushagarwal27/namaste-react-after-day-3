const Shimmer = () => {
  return (
    <>
      <div className='res-list'>
        {Array(12)
          .fill(0)
          .map((el, index) => (
            <div className='res-shimmer' key={index}></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;

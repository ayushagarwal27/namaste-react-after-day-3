const Shimmer = () => {
  return (
    <>
      <div className='flex flex-wrap mt-16'>
        {Array(12)
          .fill(0)
          .map((el, index) => (
            <div className='w-64 h-80 m-10 shadow-yellow-200 bg-yellow-100' key={index}></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;

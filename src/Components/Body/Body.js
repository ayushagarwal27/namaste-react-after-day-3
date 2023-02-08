import { useContext } from 'react';
import RestaurantList from './RestaurantList';
import TitleContext from '../../context/TitleContext';

const Body = () => {
  const { title, setTitle } = useContext(TitleContext);
  return (
    <div className='flex flex-col'>
      <input
        placeholder='Change Title'
        onChange={e => {
          setTitle(e.target.value);
        }}
        className='border border-black p-3 mt-3 w-3/4 mx-auto'
        value={title}
      />
      <RestaurantList />
    </div>
  );
};

export default Body;

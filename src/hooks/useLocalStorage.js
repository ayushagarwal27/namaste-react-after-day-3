import { useState } from 'react';

const useLocalStorage = () => {
  const [items, setItems] = useState('');

  const setItem = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  const getItem = (key) => {
    let value = localStorage.getItem(key);
    if (value) {
      setItems(JSON.parse(value));
    }
  };

  return { setItem, getItem, items };
};

export default useLocalStorage;

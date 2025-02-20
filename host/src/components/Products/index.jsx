import React, { useState, useEffect, lazy } from 'react';
import { addCard } from '@/redux/features/basketSlice';
import { useDispatch, useSelector } from 'react-redux';

const Products = lazy(() => import('products/Products'));

const RemoteProducts = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.basket);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const handlerAddCard = (item) => {
    if (!cards.find((card) => card.id === item.id)) {
      dispatch(addCard(item));
    }
  };

  return domLoaded ? <Products addCard={handlerAddCard} /> : null;
};

export default RemoteProducts;

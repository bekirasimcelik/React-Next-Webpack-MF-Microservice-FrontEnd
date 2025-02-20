import React, { useState, useEffect, lazy } from 'react';

const ShoppingCart = lazy(() => import('basket/ShoppingCart'));

const Basket = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? <ShoppingCart /> : null;
};

export default Basket;

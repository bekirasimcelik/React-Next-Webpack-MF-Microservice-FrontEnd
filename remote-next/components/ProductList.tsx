// components/ProductList.js
'use client';
import { useDispatch } from 'react-redux';
import { addItem } from '../../shared/store/slices/cartSlice';

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      <button
        onClick={() => dispatch(addItem({ id: 1, name: 'Product 1' }))}
      >
        Add to Cart
      </button>
    </div>
  );
}
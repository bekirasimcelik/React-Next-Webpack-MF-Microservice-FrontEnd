// ProductList.js
import { useAppDispatch } from '../../shared/store/store';
import { addItem } from '../../shared/store/slices/cartSlice';
import ProductCard from './ProductCard';

const ProductListInternal = ({ products, isLoading, error }) => {
  const dispatch = useAppDispatch();

  // Add to cart handler
  const handleProductSelect = (product) => {
    dispatch(addItem({
      id: product.id,
      name: product.title,
      price: product.price,
      quantity: 1,
      image: product.image
    }));
    
    // Optional: You can add a notification here
    console.log('Added to cart:', product.title);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product}
          onClick={() => handleProductSelect(product)}
        />
      ))}
    </div>
  );
};

export default ProductListInternal;
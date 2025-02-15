import React from "react";
import { List } from "antd";
import CartItem from "../CartItem/CartItem";

type CartItemType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  attributes: string[];
};

type CartItemListProps = {
  cartItems: CartItemType[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>;
};

const CartItemList: React.FC<CartItemListProps> = ({ cartItems, setCartItems }) => {
  const handleRemove = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <List
      dataSource={cartItems}
      renderItem={(item) => (
        <CartItem
          key={item.id}
          {...item}
          onRemove={handleRemove}
          onQuantityChange={handleQuantityChange}
        />
      )}
    />
  );
};

export default CartItemList;

import React, { useEffect } from "react";
import { Row, Col, Button } from "antd";
import CartItemList from "../CartItemsList/CartItemsList";
import OrderSummary from "../OrderSummary/OrderSummary";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../../../shared/store/slices/cartSlice";
import {
  loadCart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../../../../shared/store/actions/cartAction";
const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(loadCart()); // Sayfa açıldığında sepeti yükle
  }, [dispatch]);
   // :white_check_mark: Sepeti temizleme işlemi
   const handleClearCart = () => {
    dispatch(clearCart());
  };
  // :white_check_mark: Ürünü kaldırma işlemi (doğru kullanım)
  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id)); // :x: { id } yerine doğrudan id gönder
  };
  // :white_check_mark: Miktarı artırma işlemi
  const handleIncreaseQuantity = (id: number) => {
    dispatch(increaseQuantity(id));
  };
  // :white_check_mark: Miktarı azaltma işlemi
  const handleDecreaseQuantity = (id: number) => {
    dispatch(decreaseQuantity(id));
  };
  // :white_check_mark: Sepet toplam tutarını hesaplama
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.0; // Sabit kargo ücreti
  const tax = subtotal * 0.1; // %10 vergi hesaplama
  return (
    <div>
      <Button onClick={handleClearCart} style={{ background: "red" }} type="primary">
        Alayını sil
      </Button>
      <Row gutter={32}>
        {/* Sepet Ürünleri Listesi */}
        <Col xs={24} md={16}>
          <CartItemList
            cartItems={items}
            onRemoveItem={handleRemoveItem}
            onIncreaseQuantity={handleIncreaseQuantity}
            onDecreaseQuantity={handleDecreaseQuantity}
          />
        </Col>
        {/* Sipariş Özeti */}
        <Col xs={24} md={8}>
          <OrderSummary subtotal={subtotal} shipping={shipping} tax={tax} />
        </Col>
      </Row>
    </div>
  );
};
export default CartPage;
import React from 'react';
import { useCart } from '../context/CartContext';
import Container from '../components/Container'
import Heading from '../components/Heading'
import CartList from '../components/CartList'

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const calculateTotalProducts = (items) =>
    items.reduce((acc, item) => acc + item.quantity, 0);
  
  const calculateTotalPrice = (items) =>
    items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  // Group items by cartId instead of product ID
  const groupedCartItems = Array.from(
    cartItems.reduce((map, item) => {
      const key = item.cartId || item.id || item.title;
      const quantity = Number(item.quantity) || 1;
      const price = parseFloat(item.price) || 0;
  
      const existingItem = map.get(key);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        map.set(key, { ...item, cartId: key, id: item.id || key, price, quantity });
      }
      return map;
    }, new Map()).values()
  ).filter(item => item.quantity > 0);
  
  // Check if the cart is empty
  const isEmptyCart = groupedCartItems.length === 0;
  

  return (
    <section className='py-[80px]'>
      <Container>
        <Heading className='text-center py-10' text="Item List" />
        {isEmptyCart ? (
          // Render this if the cart is empty
          <p className="flex items-center justify-center py-4 h-[25vh] font-poppins font-light text-[48px] text-center">
            You have nothing to purchase, Buy now
          </p>
        ) : (
          // Otherwise, render the cart items and total
          <>
            {/* Header Row */}
            <div className="w-full flex font-poppins font-bold text-[24px] border-2 border-[#cccccc] items-center justify-center text-center">
              <h2 className="w-[10%]">SI. No</h2>
              <h2 className="w-[35%] border-l-2 border-[#cccccc]">Product Details</h2>
              <h2 className="w-[20%] border-l-2 border-[#cccccc]">Quantity</h2>
              <h2 className="w-[13.5%] border-l-2 border-[#cccccc]">Price</h2>
              <h2 className="w-[21.5%] border-l-2 border-[#cccccc]">Removed Item</h2>
            </div>
            {/* Cart Items */}
            <div className="w-full font-poppins font-normal text-[18px]">
              {groupedCartItems.map((item, index) => (
                <CartList 
                  key={item.cartId || item.id} 
                  proNo={index + 1} 
                  product={item} 
                  onRemove={() => removeFromCart(item.cartId || item.id)}
                />
              ))}
            </div>

            <div className='flex justify-end pt-20'>
              <table className="border border-purple-600">
                <tbody>
                  <tr>
                    <td className="text-base font-poppins text-purple-600 font-bold p-2 border border-purple-600">Total Product</td>
                    <td className="text-base font-poppins text-purple-600 font-bold p-2 border border-purple-600">{calculateTotalProducts(groupedCartItems)}</td>
                  </tr>
                  <tr>
                    <td className="text-base font-poppins text-purple-600 font-bold p-2 border border-purple-600">Total Price</td>
                    <td className="text-base font-poppins text-purple-600 font-bold p-2 border border-purple-600">${calculateTotalPrice(groupedCartItems).toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </Container>
    </section>
  );
}

export default Cart

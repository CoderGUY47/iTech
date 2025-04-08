import React from 'react';
import { useCart } from '../context/CartContext';
import Container from '../components/Container'
import Heading from '../components/Heading'
import CartList from '../components/CartList'

const Cart = () => {
  // Get the global cart items and functions from the context.
  const { cartItems, removeFromCart } = useCart();

  // Function to calculate the total number of products in the cart
  const calculateTotalProducts = (items) => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  };

  // Function to calculate the total price of items in the cart
  const calculateTotalPrice = (items) => {
    return items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  };

  // Group items by cartId instead of product ID
  let groupedCartItems = Object.values(
    cartItems.reduce((acc, item) => {
      // Use item.cartId if available; otherwise, fallback to using item.id or item.title as the key.
      const key = item.cartId || (item.id ? item.id : item.title);

      // Default quantity to 1 if not provided.
      let quantity = Number(item.quantity) || 1;

      // Convert price to number.
      let price = parseFloat(item.price) || 0;

      if (acc[key]) {
        // If the item is already in the accumulator, update the quantity.
        acc[key].quantity += quantity;
      } else {
        // Otherwise, add the item to the accumulator with the calculated properties.
        acc[key] = { ...item, cartId: key, id: item.id || key, price, quantity };
      }
      return acc;
    }, {})
  ).filter(item => item.quantity > 0); // Filter out items with zero or negative quantity

  // If there are no products in the cart, show the empty cart message.
  let isEmptyCart = groupedCartItems.length === 0;

  return (
    <section className='py-[80px]'>
      <Container>
        <Heading text="Item List" />
        {isEmptyCart ? (
          // Render this if the cart is empty
          <p className="flex items-center justify-center py-4 h-[25vh] font-poppins font-light text-[28px] text-center">
            You have nothing to purchase, Buy now
          </p>
        ) : (
          // Otherwise, render the cart items and total
          <>
            {/* Header Row */}
            <div className="w-full flex font-poppins font-bold text-[26px] border-2 border-[#cccccc] items-center justify-center text-center">
              <h2 className="w-2/12">SI. No</h2>
              <h2 className="w-4/12 border-l-2 border-[#cccccc]">Product Details</h2>
              <h2 className="w-4/12 border-l-2 border-[#cccccc]">Quantity</h2>
              <h2 className="w-2/12 border-l-2 border-[#cccccc]">Price</h2>
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

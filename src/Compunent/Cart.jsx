// import React, { useState } from "react";
// import { FaWindowClose } from "react-icons/fa";
// import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";

// const Cart = ({
//   cartItems,
//   showCart,
//   decQuantity,
//   totalAmount,
//   incQuantity,
//   removeCratItem,
// }) => {
//   // const [showCart, setshowCart] = useState(true);
//   // function cartShow() {
//   //   setshowCart(!showCart);
//   // }
//   return (
//     <>
//       <div className={showCart ? "cart_main show" : "cart_main "}>
//         <h2 className="close_Icon">
//           <FaWindowClose className="closeIcon" onClick={() => cartShow()} />
//         </h2>
//         <div className="calculate_price">
//           <div className="header">
//             <h2 className="heading">Cart :</h2>
//             <div className="cart_mian">
//               <AiOutlineShoppingCart className="cartIcon" />
//               <p className="totla_cart-items">{cartItems.length}</p>
//             </div>
//           </div>
//         </div>
//         <div className="cart_item_contener">
//           {cartItems.map((elem, ind) => {
//             return (
//               <div className="cart_item" key={ind}>
//                 <img src={elem.img} alt="item" />
//                 <div className="cart-item-info">
//                   <div className="item_details">
//                     <h3 className="title">{elem.title}</h3>
//                     <p className="description">{elem.description}</p>
//                     <p className="quantity">
//                       Quantity: <span>{elem.quantity}</span>
//                     </p>
//                   </div>
//                   <div className="item_quantity">
//                     <AiOutlineClose
//                       className="remove_item"
//                       onClick={() => removeCratItem(elem)}
//                     />
//                     <p className="price">
//                       Rs: <span>{elem.price}</span>
//                     </p>
//                     <div className="price_calculater">
//                       <div
//                         className="sub"
//                         onClick={() => {
//                           decQuantity(elem.id, elem.quantity);
//                         }}
//                       >
//                         -
//                       </div>
//                       <div
//                         className="add"
//                         onClick={() => {
//                           incQuantity(elem.id, elem.quantity);
//                         }}
//                       >
//                         +
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         <div className="subtotal">
//           <div className="row">
//             <h2>Total Amount:</h2>
//             <h2>
//               Rs: <span>{totalAmount}</span>
//             </h2>
//           </div>
//           <button className="checkout_btn">Checkout</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;

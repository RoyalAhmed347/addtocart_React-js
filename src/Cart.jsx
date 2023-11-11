// import React, { useState } from "react";
// import { FaWindowClose } from "react-icons/fa";
// import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";

// const Cart = () => {
//   const [showCart, setshowCart] = useState(true);
//   function cartShow() {
//     setshowCart(!showCart);
//   }
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
//               <p className="totla_cart-items">0</p>
//             </div>
//           </div>
//         </div>
//         <div className="cart_item_contener">
//           <div className="cart_item">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw3knpRnBalGBaT6hQqUWzFP39Oov2jaHQ1tDf-epfzvScVffSF0OO1Qvv1V90dL61t-Q&usqp=CAU"
//               alt="item"
//             />
//             <div className="cart-item-info">
//               <div className="item_details">
//                 <h3 className="title">Samsung M21</h3>
//                 <p className="description">white in color</p>
//                 <p className="quantity">
//                   Quantity: <span>1</span>
//                 </p>
//               </div>
//               <div className="item_quantity">
//                 <AiOutlineClose className="remove_item" />
//                 <p className="price">
//                   Rs: <span>2630</span>
//                 </p>
//                 <div className="price_calculater">
//                   <div className="sub">-</div>
//                   <div className="add">+</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;

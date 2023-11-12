// import React from "react";

// const Shop = ({ items }) => {
//   return (
//     <>
//       <div className="shop_contener">
//         {items.map((elem, index) => {
//           return (
//             <>
//               <div className="item" key={index}>
//                 <img src={elem.img} alt="item" />
//                 <div className="info">
//                   <h2>{elem.title}</h2>
//                   <p>{elem.description}</p>
//                   <p className="item_price">
//                     Price:
//                     <span>
//                       <sup>Rs</sup>
//                       {elem.price}
//                     </span>
//                   </p>
//                   <button
//                     className="cart_btn"
//                     onClick={() => {
//                       addCartItem(elem);
//                     }}
//                   >
//                     Add To Cart
//                   </button>
//                 </div>
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Shop;

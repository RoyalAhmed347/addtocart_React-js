import React, { useEffect, useState } from "react";
import "./App.css";
import { FaWindowClose } from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";

// import Header from "./Compunent/Header";
// import Shop from "./Compunent/Shop";
import Products from "./Api/Products";
// import Footer from "./Compunent/Footer";
// import Cart from "./Cart";
const App = () => {
  const [items, setitems] = useState(Products);

  const [cartItems, setcartItems] = useState([]);

  const [showCart, setshowCart] = useState(false);

  const [totalAmount, settotalAmount] = useState(0);

  function cartShow() {
    setshowCart(!showCart);
  }

  function addCartItem(item) {
    settotalAmount(totalAmount + item.price * item.quantity);
    return setcartItems((prevData) => {
      return [...prevData, item];
    });
  }
  function removeCratItem(item) {
    settotalAmount(totalAmount - item.price * item.quantity);

    setcartItems((prvData) => {
      return prvData.filter((elem) => {
        return elem.id !== item.id;
      });
    });
  }
  function incQuantity(id, qua) {
    const new_data = cartItems.map((ele) => {
      return ele.id === id ? { ...ele, quantity: qua + 1 } : { ...ele };
    });
    setcartItems(new_data);
  }
  function decQuantity(id, qua) {
    if (qua > 1) {
      const new_data = cartItems.map((ele) => {
        return ele.id === id ? { ...ele, quantity: qua - 1 } : { ...ele };
      });
      setcartItems(new_data);
    }
  }

  useEffect(() => {
    let newTotal = cartItems.reduce((total, elem) => {
      return total + elem.price * elem.quantity;
    }, 0);
    settotalAmount(newTotal);
  }, [cartItems]);

  return (
    <>
      {/* Header */}
      <header>
        <div className="brandName">
          <h2>Royal Shop</h2>
        </div>
        <div className="cart_mian" onClick={() => cartShow()}>
          <AiOutlineShoppingCart className="cartIcon" />
          <p className="totla_cart-items">{cartItems.length}</p>
        </div>
      </header>
      {/* Shop */}
      <div className="shop_contener">
        {items.map((elem, index) => {
          return (
            <>
              <div className="item" key={index}>
                <img src={elem.img} alt="item" />
                <div className="info">
                  <h2>{elem.title}</h2>
                  <p>{elem.description}</p>
                  <p className="item_price">
                    Price:
                    <span>
                      <sup>Rs</sup>
                      {elem.price}
                    </span>
                  </p>
                  <button
                    className="cart_btn"
                    onClick={() => {
                      addCartItem(elem);
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {/* Cart */}
      <div className={showCart ? "cart_main show" : "cart_main "}>
        <h2 className="close_Icon">
          <FaWindowClose className="closeIcon" onClick={() => cartShow()} />
        </h2>
        <div className="calculate_price">
          <div className="header">
            <h2 className="heading">Cart :</h2>
            <div className="cart_mian">
              <AiOutlineShoppingCart className="cartIcon" />
              <p className="totla_cart-items">{cartItems.length}</p>
            </div>
          </div>
        </div>
        <div className="cart_item_contener">
          {cartItems.map((elem, ind) => {
            return (
              <div className="cart_item" key={ind}>
                <img src={elem.img} alt="item" />
                <div className="cart-item-info">
                  <div className="item_details">
                    <h3 className="title">{elem.title}</h3>
                    <p className="description">{elem.description}</p>
                    <p className="quantity">
                      Quantity: <span>{elem.quantity}</span>
                    </p>
                  </div>
                  <div className="item_quantity">
                    <AiOutlineClose
                      className="remove_item"
                      onClick={() => removeCratItem(elem)}
                    />
                    <p className="price">
                      Rs: <span>{elem.price}</span>
                    </p>
                    <div className="price_calculater">
                      <div
                        className="sub"
                        onClick={() => {
                          decQuantity(elem.id, elem.quantity);
                        }}
                      >
                        -
                      </div>
                      <div
                        className="add"
                        onClick={() => {
                          incQuantity(elem.id, elem.quantity);
                        }}
                      >
                        +
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="subtotal">
          <div className="row">
            <h2>Total Amount:</h2>
            <h2>
              Rs: <span>{totalAmount}</span>
            </h2>
          </div>
          <button className="checkout_btn">Checkout</button>
        </div>
      </div>
      {/* Footer */}
      <footer>
        <p>copyright © 2023 | RoyalAhmed</p>
      </footer>
    </>
  );
};

export default App;

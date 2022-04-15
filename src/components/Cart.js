import React from 'react'
import "./Cart.css"
export const Cart = ({cart, setCart}) => {

  const place = () => {
    setCart([])
  }
  return (
    <div className='cart'>
        <h1>Cart</h1>
        {
          cart.map((item) => (
            <div className="item">
              <img src={item?.img} className="item__img" alt="" />
              <div className="item__name">Item Name: {item.name}</div>
              <div className="item__name">Item Price: {item.price}</div>

            </div>
          ))
        }

        <button className="btn" onClick={place}>Place Order</button>
        
    </div>
  )
}

import React from 'react'
import "./Card.css"
export const Card = ( {name, id, price, img, description, cart, setCart} ) => {

    const addItem = (e) => {
        e.preventDefault();

        setCart([...cart, {
            id,
            price,
            img,
            name,
            description
        }])
    }
  return (
    <div className='card'>
        <h1 className="card__h1">
            <div className="card__name">
                {name}
            </div>
            
            <img src={img} alt="" className="card__img" />
        </h1>
        
        <div className="card__text">
            price: {price}
        </div>

        <div className="card__desc">
            {description}
        </div>

        <button className="add" onClick={addItem}>
            Add
        </button>
    </div>
  )
}

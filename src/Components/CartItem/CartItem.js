import React from 'react'

import "./CarItem.scss"


function CartItem({name,imgUrl,quantity,price}) {
  return (
    <div className='CartItem'>
        <div className='Item-img'>
            <img src={imgUrl} alt = "Cart__item"/>
        </div>

        <div className='item__info-fn'>
            <h5>{name}</h5>
            <p className='p-text'>{quantity}g</p>

            <div className='price__functions'>
                <h5>${price}</h5>


                <div className='function'>
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem
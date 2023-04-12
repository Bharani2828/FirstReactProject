import React, { useContext } from 'react'
import { Shopcontext } from '../Context/shop-context'

export const CartItem = (props) => {
    const{id,productName,price,productImage}=props.data
    const {cartItems, addToCart, removeFromCart, updateCartItemsCount}=useContext(Shopcontext)
  return (
    <div className='cartItem'>
        <img src={productImage} id='imgs'/>
        <div className='description'>
            <b>{productName}</b>
            <p>${price}</p>
            <div className='countHandler'>
              <button onClick={()=> removeFromCart(id)}>-</button>
              <input value={cartItems[id]} onChange={(e)=>updateCartItemsCount(Number(e.target.value),id)}/>
              <button onClick={()=> addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}

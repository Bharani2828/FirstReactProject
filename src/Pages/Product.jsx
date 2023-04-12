import React, { useContext } from 'react'
import { Shopcontext } from '../Context/shop-context'

export const Product = (props) => {
    const{id, productName, price, productImage}= props.data
    const{addToCart,cartItems}=useContext(Shopcontext)
    
    const cartItemAmount= cartItems[id]
  
    return (
    <div className='product'>
       
        <img src={productImage} id='primg' alt="p1" />
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
       
        <button className='addToCartBttn' onClick={()=>addToCart(id)}>Add to Cart
        {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
        </div>
    
  )
}

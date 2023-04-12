import React, { useContext } from 'react'
import { Products } from '../Products'
import { Shopcontext } from '../Context/shop-context'
import { CartItem } from './Cart-items'
import './Cart.css'
import {useNavigate} from 'react-router-dom'

export const Cart = () => {
  const{ cartItems, getTotalCartAmount}= useContext(Shopcontext)
  const totalAmount=getTotalCartAmount()

  const navigate= useNavigate()
  return (
    <div className='cart'>
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className='cartItems'>
        {Products.map((product)=>{
         if (cartItems[product.id] !==0){
          return<CartItem data={product}/>
         }
        })}
      </div>

      {totalAmount > 0 ? (
      <div className='checkout'>
      <p>Subtotal: ${totalAmount}</p>
      <button onClick={()=> navigate('/')}>Continue Shopping</button>
      <button>Checkout</button>  
      </div> ) 
       : ( <h1>Your cart is empty</h1>) }
    </div>
  )
}

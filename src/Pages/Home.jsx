import React from 'react'
import { Products } from '../Products'
import { Product } from './Product'
import './Home.css'

export const Home = () => {
  return (
    <div className='home'>
      <div className='shoptitle'>
        <h1>CBI shop</h1>
      </div>
      <div className='products'>
        {Products.map((product)=><Product data={product}/>)}
      </div>
    </div>
  )
}

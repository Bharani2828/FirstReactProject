import React, { useState } from 'react'
import { Products } from '../Products'
import { Product } from './Product'
import './Home.css'

export const Home = () => {
  const [ search, setSearch] = useState('')

  const filterwords = Products.filter((product) =>{
    return product.productName.toLowerCase().includes(search.toLowerCase())
  })
  
  return (
    <div className='home'>
      <div className='shoptitle'>
        <h1>CBI shop</h1>
        <input id='searching' placeholder='search...' onChange={(event) => setSearch(event.target.value)} />
      </div>
      <div className='products'>
        {filterwords.map((product)=><Product data={product}/>)}
      </div>
    </div>
  )
}

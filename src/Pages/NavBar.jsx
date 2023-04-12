import React from 'react'
import { Link } from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import './NavBar.css'

export default function NavBar() {
  return (
    <div className='navbar'>
    <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/cart'>
            <ShoppingCart size={32}/>
        </Link>
    </div>
    </div>
  )
}

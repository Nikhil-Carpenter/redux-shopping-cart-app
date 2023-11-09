import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Menu() {
 const cartData = useSelector(state=>state.carts.value)

  return (
    <div className='container'>
        <h1 style={{textAlign:'center',padding:"10px", backgroundColor:"aliceBlue"}}>
            Shopping Cart
        </h1>
        <div className='container'>
            <ul className='nav navbar-nav '>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/cart'>Cart:{cartData.length}</Link>
                </li>
            </ul>
        </div>
    </div>    
  )
}

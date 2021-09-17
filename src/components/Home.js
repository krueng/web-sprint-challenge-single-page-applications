import React from 'react'
import {useHistory} from 'react-router-dom'
export default function Home() {
 const history = useHistory();

  const routeToShop = () => {
history.push('/pizza');
  }

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='Pizza.jpg'
        alt='Yummi pizza'
      />
      <button id='order-pizza'
        onClick={routeToShop}
        className='md-button shop-button'
      >
        Order!
      </button>
    </div>
  )
}

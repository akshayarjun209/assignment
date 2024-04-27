import React from 'react'
import { useSelector } from 'react-redux'

const CartItems = () => {
    const {cart}= useSelector(item=>item.user)
    console.log(cart);

  return (
    <div className='container mx-2' >
        <h1 className='text-center my-2'> All Cart Items</h1>
        <h3 className='text-center my-3'> Total Items {cart.length}</h3>
        <div className='row my-4'>
    {
    cart?.map((item)=>(
        <div className='col-md-3 my-4' key={item.id}>
           <div className="card"  style={{width: '18rem'}}>
                <div className='image-container'>
                    <img src={item.image} className="card-img-top card-image-size" alt="..."  />
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center">{item.title.slice(0 ,20)}...</h5>
                    <h6 className="card-text text-center">Rs.{item.price}</h6>
                    <p className='text-center'>Quantity {item.quantity}</p>
                </div>
            </div>
        </div>

        
    ))}   
    </div>
</div>

          
    
  )
}

export default CartItems
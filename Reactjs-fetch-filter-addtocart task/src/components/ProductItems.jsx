import React from 'react';
import { useDispatch } from 'react-redux';
import { AddCart } from '../redux/cartSystem';


const ProductItems = (props) => {
    let{ title, price, image, item}=props
    
    const dispatch= useDispatch()
 
    return (
   <div className='container mx-2' >
        <div className="card" style={{width: '18rem'}}>
            <div className='image-container'>
                <img src={image} className="card-img-top card-image-size" alt="..."  />
            </div>
            <div className="card-body">
                <h5 className="card-title text-center">{title.slice(0 ,20)}...</h5>
                <h6 className="card-text text-center">Rs.{price}</h6>
                <div className='butn'>
                    <a href="#" className="btn btn-primary my-2">View Product</a>
                    <button type="button" className="btn btn-dark" onClick={()=>dispatch(AddCart(item))}>Add to Cart</button>
                </div>
            </div>

        </div>
  </div>

  )
}

export default ProductItems
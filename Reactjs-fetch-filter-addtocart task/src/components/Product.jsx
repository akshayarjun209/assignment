import React, { useEffect, useState } from 'react'
import ProductItems from './ProductItems'

const Product = (props) => {
   
    const[ products , setProducts ]= useState([]);


    const fetchData = async () => {
        try {
            const url = 'https://fakestoreapi.com/products/';
            const response = await fetch(url);
            const productData = await response.json();
            console.log(productData);
            setProducts(productData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    
    useEffect(() => {
        fetchData();
    }, [])

    const capitalFirstLetter= (str) =>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

  return (
    <div>
        <h1 className='text-center my-2'>{props.category?capitalFirstLetter(props.category):"Products"}</h1>
       <div className='row my-4'>
        {products.filter((product) => !props.category || product.category === props.category).map((ele) => (
            
        <div className='col-md-3 my-4' key={ele.id}>
        <ProductItems title={ele.title} price={ele.price} image={ele.image} item={ele} ></ProductItems>
        </div>
    ))}
    </div>
    </div>
  )
}

export default Product
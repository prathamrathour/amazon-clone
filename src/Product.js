import React from 'react'
import './Product.css'
function Product() {
    return (
        <div className='product'>
            <div className="product__info">
                <p>the lean startup</p>
                <p className='product__price'>
                   <strong> <small>$</small>
                    19.99</strong>
                </p>
                <div className='product__rating'>
                    <p>🖤</p>
                   
                </div>
               
            </div>
             <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/76ad7410443025.560e503a0513d.jpg"></img>
             <button> Add to Basket</button>
        </div>
    )
}

export default Product

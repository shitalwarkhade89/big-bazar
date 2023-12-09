import react from 'react';
import './ProductCard.css';

function ProductCard( {name,description,price,image,}){
    return(
        <>
     <div className="product-card">
        <div>
        <img src={image} alt={name} className='product-card-image'/>
        </div>
        <h2 className='product-card-name'>{name}</h2>
        <p className='product-description'>{description}</p>
        <p className='product-price'>₹ {price}</p>
       <div>
        <button type='button' className='btn product-card-btn'> Buy Now</button>
       </div>
     </div>
     </>
    )
}

export default ProductCard
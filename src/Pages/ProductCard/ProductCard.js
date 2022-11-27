import React from 'react';

const ProductCard = ({ product, setSelectedProduct }) => {
    const {productName, description, image} = product;
    

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="" style={{width: "100%", height:"350px"}} /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <label
                    htmlFor="booking-modal"
                    onClick={()=> setSelectedProduct(product)} className="btn btn-primary text-white">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
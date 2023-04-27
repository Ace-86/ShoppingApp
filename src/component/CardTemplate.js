import React from 'react';

const CardTemplate = ({product}) => {
    return (
        <div className="card">
            <img src={product.image} alt={product.name} className="card-image" />
            <div className="card-content">
                <h2 className="card-title"> {product.name}</h2>
                <p className="card-description">{product.description}</p>
                <div className="card-footer">
                    <p className="card-price">${product.price}</p>
                    <button className="card-button">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default CardTemplate;
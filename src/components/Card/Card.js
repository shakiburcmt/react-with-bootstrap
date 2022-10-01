import React from 'react';
import img from '../../images/images.jpg'
    
const Card = ({product}) => {
    return (
        <div className="card">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">The MacBook Pro is a line of Macintosh notebook computers by Apple Inc. Introduced in January 2006.</p>
                <p className="card-text"><small className="text-muted">Price: {product.price}</small></p>
            </div>
        </div>
    );
};

export default Card;
import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        { id: 1, name: 'MacBook Pro', price: 145000 },
        { id: 2, name: 'MacBook Air', price: 155000 },
        { id: 3, name: 'MacBook', price: 130000 }
    ]
    return (
        <div className="card-group">
            {
                products.map(product=><Card product={product} key={product.id}></Card>)
            }
        </div>
    );
};

export default CardGroup;
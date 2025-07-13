import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

const products = [
    { id: 1, name: 'Fiddle Leaf Fig', price: 25, image: 'https://example.com/fiddle-leaf-fig.jpg' },
    { id: 2, name: 'Snake Plant', price: 15, image: 'https://example.com/snake-plant.jpg' },
    { id: 3, name: 'Pothos', price: 20, image: 'https://example.com/pothos.jpg' },
    // Add more products as needed
];

const ProductListing = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart({ ...product, quantity: 1 }));
    };

    return (
        <div>
            <h2>Product Listing</h2>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListing;

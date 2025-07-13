export const addToCart = (item) => ({
    type: 'ADD_TO_CART',
    payload: item,
});

export const removeFromCart = (item) => ({
    type: 'REMOVE_FROM_CART',
    payload: item,
});

export const increment = (item) => ({
    type: 'INCREMENT',
    payload: item,
});

export const decrement = (item) => ({
    type: 'DECREMENT',
    payload: item,
});

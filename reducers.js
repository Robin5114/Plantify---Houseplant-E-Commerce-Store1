const initialState = {
    cart: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
            };
        case 'INCREMENT':
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };
        case 'DECREMENT':
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
                ),
            };
        default:
            return state;
    }
};

export default rootReducer;

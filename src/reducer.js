// state
export const initialState = {
  cart: []
}

// selector
export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

// REDUCER = always listening
const reducer = (state, action) => {
  console.log('action in reducer', action)

  switch(action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

      default:
        return state;
  }
}

export default reducer;
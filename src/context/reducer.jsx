export const actionType = {
  SET_CAFITEMS: "SET_CAFITEMS",
  SET_CARTITEMS: "SET_CARTITEMS",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionType.SET_CAFITEMS:
      return {
        ...state,
        cafItems: action.cafItems,
      };
      case actionType.SET_CARTITEMS:
        return {
          ...state,
          cafItems: action.cartItems,
        };
  
    default:
      return state;
  }
};

export default reducer;
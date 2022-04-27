const reducer = (state = [], action) => {
  switch (action.type) {
    case "raz":
      return [...state, action.payload];
    case "hakob":
      return [...state, action.payload];
    case "caxik":
      return [...state, action.payload];
    case "clear":
      return [];
    default:
      return state;
  }
}; 
export default reducer;

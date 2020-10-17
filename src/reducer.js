export const initialState = {
  userName: null,
  imageUrl: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_GOOGLE_DATA":
      return {
        ...state,
        userName: action.name,
        imageUrl: action.imageUrl,
      };
    case "SET_GUEST_DATA":
      return {
        ...state,
        userName: action.name,
      };
    default:
      return state;
  }
};

export default reducer;

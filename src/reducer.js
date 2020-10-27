export const initialState = {
  userName: null,
  imageUrl: null,
  isGoogleSignin: false,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_GOOGLE_DATA":
      return {
        ...state,
        userName: action.name,
        imageUrl: action.imageUrl,
        isGoogleSignin: action.isGoogleSignin,
      };
    case "SET_GUEST_DATA":
      return {
        ...state,
        userName: action.name,
        isGoogleSignin: action.isGoogleSignin,
      };
    default:
      return state;
  }
};

export default reducer;

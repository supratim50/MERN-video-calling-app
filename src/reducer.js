export const initialState = {
  userName: null,
  imageUrl: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        userName: action.name,
        imageUrl: action.imageUrl,
      };
    default:
      return state;
  }
};

export default reducer;

export const initialState = {
  userName: null,
  imageUrl: null,
  isGoogleSignin: false,
  showChatBox: false,
  showParticipants: false,
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
    case "OPEN_CHAT":
      return {
        ...state,
        showChatBox: action.chat,
        showParticipants: false,
      };
    case "OPEN_PARTICIPANTS":
      return {
        ...state,
        showParticipants: action.participants,
        showChatBox: false,
      };
    default:
      return state;
  }
};

export default reducer;

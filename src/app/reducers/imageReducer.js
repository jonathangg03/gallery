const INITIAL_STATE = {
  image: [],
};

const imageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_All":
      return { ...state, image: action.payload };
    default:
      return state;
  }
};

export default imageReducer;

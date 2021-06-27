import {
  GET_ALL,
  LOADING,
  ERROR,
  SET_DELETE_ID,
  REMOVE_DELETE_ID,
} from "../types/imagesTypes";
const INITIAL_STATE = {
  image: [],
  loading: false,
  error: "",
  delete_id: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL:
      return { ...state, image: action.payload, loading: false, delete_id: "" };
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, loading: false, error: action.payload };
    case SET_DELETE_ID:
      return { ...state, delete_id: action.payload };
    case REMOVE_DELETE_ID:
      return { ...state, delete_id: "" };
    default:
      return state;
  }
};

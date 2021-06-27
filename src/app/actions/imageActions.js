import axios from "axios";

export const getImage = () => async (dispatch) => {
  const response = await axios("http://localhost:3000/api/upload");
  dispatch({
    type: "GET_ALL",
    payload: response.data,
  });
};

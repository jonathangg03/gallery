import axios from "axios";
import { GET_ALL, LOADING, ERROR } from "../types/imagesTypes";

export const getImage = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.get("http://localhost:3000/api/upload");
    dispatch({
      type: GET_ALL,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR,
      payload: "No se puede traer las imagenes",
    });
  }
};

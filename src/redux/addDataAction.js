import { ADD_DATA } from "./addDataConstant";

export const addData = (data) => async (dispatch) => {
  dispatch({
    type: ADD_DATA,
    payload: data,
  });
};

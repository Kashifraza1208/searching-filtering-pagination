import { ADD_DATA } from "./addDataConstant";

export const addDataReducer = (state = { dataArray: [] }, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        dataArray: [...state.dataArray, action.payload],
      };
    default:
      return state;
  }
};

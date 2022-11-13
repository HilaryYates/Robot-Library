import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_PENDING,
} from "./constants";
const initialState = { searchField: "" };

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

// export const requestRobots = (dispatch) => {
//   dispatch({ type: REQUEST_ROBOTS_PENDING });
// };

// export const requestRobots = (dispatch) => {
//   dispatch({ type: REQUEST_ROBOTS_PENDING });
// };

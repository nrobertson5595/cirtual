export const setUsersAction = (value) => (dispatch) => {
  dispatch({ type: "SET_USERS", payload: value });
};

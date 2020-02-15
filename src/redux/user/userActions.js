import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
  //   FETCH_USERS_LOADING
} from "./userTypes";

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST
});

export const fetchUsersSuccess = json => ({
  type: FETCH_USERS_SUCCESS,
  payload: json
});

export const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  payload: error
});

// export const fetchUsersLoading = json => ({
//   type: FETCH_USERS_LOADING,
//   payload: json
// });

export const fetchUsers = () => {
  //   const isLoading = true;

  return async dispatch => {
    dispatch(fetchUsersRequest());
    try {
      const response = await fetch("http://localhost:3000/users");

      const users = await response.json();
      dispatch(fetchUsersSuccess(users));
      //   isLoading = false;
      console.log(response);
    } catch (error) {
      dispatch(fetchUsersFailure(error));
      //   isLoading = false;
    }
  };
};

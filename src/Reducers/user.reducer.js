const initState = {
  isAuth: false,
  loading: false,
  user: {},
  error: "",
};

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initState, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        ...action.payload,
        loading: false,
        isAuth: true,
        error: "",
      };
    case "LOGIN_FAILURE":
      return { ...state, ...action.payload.data, loading: false };
    case "LOGIN_REQUEST":
      return { ...state, loading: action.payload.loading };
    case "LOGIN_SUCCESS_2":
      return { ...state, ...action.payload, loading: false };
    case "LOGIN_FAILURE_2":
      return { ...state, ...action.payload.data, loading: false };
    default:
      return state;
  }
}

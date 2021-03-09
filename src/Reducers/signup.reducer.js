const initState = {
  success: false,
  error: "",
  loading: false,
};

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initState, action) {
  switch (action.type) {
    case "SIGNUP_SUCCES":
      return { ...state, ...action.payload, loading: false };
    case "SIGNUP_FAILURE":
      return { ...state, ...action.payload.error, loading: false };
    case "SIGNUP_REQUEST":
      return { ...state, loading: action.payload.loading };

    default:
      return state;
  }
}

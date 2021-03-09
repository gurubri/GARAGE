const initState = {
  error: "",
  loading: false,
};

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initState, action) {
  switch (action.type) {
    case "CAR_SUCCES":
      return { ...state, ...action.payload, loading: false };
    case "CAR_FAILURE":
      return { ...state, ...action.payload.error, loading: false };
    case "CAR_REQUEST":
      return { ...state, loading: action.payload.loading };

    default:
      return state;
  }
}

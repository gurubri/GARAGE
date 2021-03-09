const initState = {
  data: [],
  current: null,
  error: null,
};

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initState, action) {
  console.log(action);
  switch (action.type) {
    case "GET_CURRENT_SUCCESS":
      return {
        ...state,
        current: { ...action.payload },
        loading: false,
      };
    case "GET_CURRENT_FAILURE":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "GET_CURRENT_REQUEST":
      return { ...state, loading: true };
    default:
      return state;
  }
}

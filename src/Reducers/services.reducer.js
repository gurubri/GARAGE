const initState = {
  services: [],
};

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initState, action) {
  switch (action.type) {
    case "GET_SERVICE_SUCCESS":
      return { ...state, services: [...action.payload], loading: false };
    case "GET_SERVICE_FAILURE":
      return { ...state, ...action.payload.data, loading: false };
    case "GET_SERVICE_REQUEST":
      return { ...state, loading: action.payload.loading };

    default:
      return state;
  }
}

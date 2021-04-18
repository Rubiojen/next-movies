export function getReducer(state, action) {
  switch (action.type) {
    case "GET_STARTED":
      return { isLoading: true };
    case "GET_FINISHED":
      return { isLoading: false };
    case "GET_ERROR":
      return { isError: true, errorMessage: action.payload };
    default:
      return state;
  }
}

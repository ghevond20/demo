const api = (state = {}, action) => {
  switch (action.type) {
    case "REQUEST_POSTS":
      return state;
    case "RECEIVE_POSTS":
      return {...state, data: action.data};
    default:
      return state;
  }
}

export default api

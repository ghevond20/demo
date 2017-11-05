const api = (state = [], action) => {
  switch (action.type) {
    case 'REQUEST_RESPONCE':
    let data = clearJsonResponce(action.data)
      return [
        ...state,
        data
      ]
    default:
      return state
  }
}


const clearJsonResponce = (data) => {
  return data.feed
}

export default api

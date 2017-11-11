const api = (state = {}, action) => {
  switch (action.type) {
    case "REQUEST_POSTS":
      return state;
    case "RECEIVE_POSTS":
      return {...state, data: action.data};
    case "CHANGE_ITEM":
      return {...state, currentItem: action.item, currentIndex: action.index};
    case "CLEAR_ITEM":
      return {...state, currentItem:undefined, currentIndex:null};
    case "DELETE_ITEM":
      return deleteItem(state)
    default:
      return state;
  }
}
const deleteItem = (state) => {
  if(state.currentIndex === null || state.currentIndex===undefined ){
    return state
  }
  const data = state.data
  data[state.currentIndex].status = "deleted"
    return {...state, currentItem:undefined, currentIndex:null, data:data};

}
export default api

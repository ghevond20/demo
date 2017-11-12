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
    case "SHOW_ADDFORM":
      return {...state,showForm:true};
    case "HIDE_ADDFORM":
      return {...state,showForm:false};
    case "ADD_NEWITEM":
      //return addItemToStore(state, action.item)
      let data = state.data;
      let newItem = {
        status:'visible',
        content:{
          "title_alt":action.item.title,
          "media": {
            "images": [{
              "original_url": action.item.url ,
              "url": action.item.url
            }]
        },
        description:action.item.description
        }
      }
      data.push(newItem)
      return {...state,data,showForm:false};
    default:
      return state;
  }
}

const addItemToStore = (state, item) => {
  let data = state.data;
  let newItem = {
    status:'visible',
    content:{
      "title_alt":item.title,
      "media": {
        "images": [{
          "original_url": item.url ,
          "url": item.url
        }]
    },
    description:item.description
    }
  }
  data.push(newItem)
  return {...state,data,showForm:false};
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

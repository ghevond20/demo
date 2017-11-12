export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'


export const clickOnItem = (item, index) => ({
  type: 'CHANGE_ITEM',
  index,
  item
})

export const showAddFormAction = () => ({
  type: 'SHOW_ADDFORM'
})

export const addNewItem = (item) => ({
  type: 'ADD_NEWITEM',
  item
})

export const hideAddFormAction = () => ({
  type: 'HIDE_ADDFORM'
})

export const deleteItems = (index) => ({
  type: 'DELETE_ITEM',
  index
})

export const clearCurrentItems = () => ({
  type: 'CLEAR_ITEM'
})


export const requestPosts = peyload => ({
  type: REQUEST_POSTS,
  peyload
})

export const receivePosts = (json) => ({
  type: RECEIVE_POSTS,
  data: json.data.feed
})

export const fetchPosts = peyload => dispatch => {
  dispatch(requestPosts(peyload))
  return fetch(`http://localhost:3000/feed.json`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(json)))
}

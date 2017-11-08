export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'



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

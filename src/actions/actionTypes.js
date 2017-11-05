export const SEND_REQUEST = 'SEND_REQUEST'
export const REQUEST_RESPONCE = 'REQUEST_RESPONCE'


export const fatchRequest = () => (dispatch, getState) => {
  console.log('aaaa');
  return dispatch(getJson())
}

const getJson = () => (dispatch, getState) => {
  return fetch('http://localhost:3000/feed.json')
  .then((response) => (response.json())).then(data => {
    dispatch({type:REQUEST_RESPONCE , data: data})
  })
}

import { connect } from 'react-redux'
import {fatchRequest} from '../actions/actionTypes'
import NewsFeed from '../components/NewsFeed'

const mapStateToProps = (state) => ({
  data: state.data
})

const apiRequest = () => {
  return fetch('http://localhost:3000/feed.json')
 .then((response) => (response.json())).then(data => {
  return data
 })
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadJson: () => (dispatch({type: '' , data: ''}))
  }
}

const NewsFeedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed)

export default NewsFeedContainer

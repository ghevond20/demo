import { connect } from 'react-redux'
import NewsFeed from '../components/NewsFeed'

const mapStateToProps = (state) => ({
  data: state.api.data,
  currentItem: state.api.currentItem
})

const NewsFeedContainer = connect(mapStateToProps
)(NewsFeed)

export default NewsFeedContainer

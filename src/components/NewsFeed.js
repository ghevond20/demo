import React, { Component } from 'react';
import Loading from './Loading'
import * as actions from '../actions/actionTypes'
import {fetchPosts } from '../actions/actionTypes'



class NewsFeed extends Component {
  componentDidMount() {
      const { dispatch} = this.props
      dispatch(fetchPosts())
  }

  render() {
    const { data } = this.props;
    if(!data){
      return (<Loading />)
    }
    return data.map(item => {
      return (<div>
          <span className="title">{item.content.title_alt}</span>
          <span className="description">{item.description}</span>
        </div>)
    })
  }
}


export default NewsFeed

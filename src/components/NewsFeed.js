import React, { Component } from 'react';
import Loading from './Loading'
import * as actions from '../actions/actionTypes'
class NewsFeed extends Component {



  render() {
    console.log(this.props);
    if(!this.props.data){
      actions.fatchRequest()
      return (<Loading />)
    }
    return this.props.data.map(item => {
      return (<div>
          <span className="title">{this.props.item.content.title_alt}</span>
          <span className="description">{item.content.description}</span>
        </div>)
    })
  }
}


export default NewsFeed

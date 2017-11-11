import React, { Component } from 'react';
import Loading from './Loading'
import {fetchPosts, clickOnItem, clearCurrentItems, deleteItems} from '../actions/actionTypes'



class NewsFeed extends Component {

  componentDidMount(  ) {
      const { dispatch} = this.props
      dispatch(fetchPosts())
  }

  chanegCurrentItem = (item, index) => {
    const { dispatch} = this.props
    dispatch(clickOnItem(item, index))
  }

  rendPostItems = () => {
    const { data } = this.props;
    const result = [];
     data.forEach((item, index) => {
      if(item.status==="visible"){
        result.push( <div key={index}>
                    <span onClick={this.chanegCurrentItem.bind(this, item, index)} className="title">{item.content.title_alt}</span>
                    </div>)
      }

    })
  return result
}

  ClearItems = () => {
    const {dispatch} = this.props
    dispatch(clearCurrentItems())
  }

  renderCurrentItemContent = () =>{
    const currentItem = this.props.currentItem
    if(currentItem === undefined){
      return
    }

    return (<div className="currentItem">
    <img src={currentItem.content.media.images[0].original_url} />
      {currentItem.content.title_alt}
      {currentItem.content.description}
    </div>)
  }


  dispatchDeleteCurrentItem = () => {
    const {dispatch} = this.props
    dispatch(deleteItems())
  }

  deleteCurrentItems = () => {
    return (<button onClick={this.dispatchDeleteCurrentItem}>Delete</button>)
  }

  clearButton = () => {
    return (
      <button onClick={this.ClearItems}>Clear</button>
    )
  }
  render() {
    const { data } = this.props;
    if(!data){
      return (<Loading />)
    }

    return(<div>
      {this.deleteCurrentItems()}
      {this.clearButton()}
      {this.rendPostItems()}
      {this.renderCurrentItemContent()}
      </div>
    )

  }
}


export default NewsFeed

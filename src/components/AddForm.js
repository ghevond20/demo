import React, { Component } from 'react';
import {addNewItem} from '../actions/actionTypes'


class AddItemForm extends Component {
constructor(props){
  super(props)
  this.state={
    title:'',
    url:'',
    description:''
  }
}

  onChangeValue = (field, event) => {
    let value = event.target.value
    this.setState({
      [field]:value
    })
  }

  addItem = () => {
    let params = {
      title: this.state.title,
      url: this.state.url,
      description: this.state.description
    }

    this.props.reRender(params)
  }

  getFormField = () => {
  return(
    <div>
      <input onChange={this.onChangeValue.bind(this, 'title')} defaultValue={this.state.title} type="text"/>
      <input onChange={this.onChangeValue.bind(this, 'url')} defaultValue={this.state.url} type="text"/>
      <textarea onChange={this.onChangeValue.bind(this, 'description')} defaultValue={this.state.description} ></textarea>
      <button onClick={this.addItem}>Submit</button>
    </div>
  )
  }

  render() {
    const { showForm } = this.props;
    if(!showForm){
      return (<div/>)
    }

    return(<div>
      {this.getFormField()}
      </div>
    )

  }
}


export default AddItemForm

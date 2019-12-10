import React, { Component } from 'react'

export class FoodSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>Search For A Food</h1>
        <input
          type='text'
          placeholder='search for a food'
          name='query'
          value={this.state.query}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default FoodSearch;

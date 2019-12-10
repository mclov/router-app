import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FoodSearch.css';

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
      <div className='FoodSearch'>
        <h1>Search For A Food</h1>
        <div className='search-area'>
          <input
            className='search-box'
            type='text'
            placeholder='Search for a type of food'
            name='query'
            value={this.state.query}
            onChange={this.handleChange}
          />
          <Link className='search-button' to={`/food/${this.state.query}`} >Go</Link>
        </div>
      </div >
    )
  }
}

export default FoodSearch;

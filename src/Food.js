import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Food.css';

export class Food extends Component {
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this);
  }

  handleBack() {
    this.props.history.goBack();
  }

  render() {
    const name = this.props.match.params.name
    const url = `https://source.unsplash.com/1600x900/?${name}`;

    return (
      <div className='Food'>
        {/\d/.test(name) ? (
          <Redirect to='/' />
        ) : (
            <div>
              <h1>I love to eat {name}</h1>
              <img src={url} alt={name} />
            </div>
          )}
      </div>
    )
  }
}

export default Food;
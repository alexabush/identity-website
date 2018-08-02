import React, { Component } from 'react';
import './Card.css';
import deadpool_profile_pic from './deadpool_profile_pic.jpg';

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <div className="Card__div--lines">
          <div className="line" />
          <div className="Card__div--photo">
            <img src={deadpool_profile_pic} alt="" />
          </div>
          <div className="line" />
        </div>
        <div className="Card__div--text">
          <h1>Deadpool</h1>
          <p>Senior psychonautics engineer</p>
        </div>
      </div>
    );
  }
}

export default Card;

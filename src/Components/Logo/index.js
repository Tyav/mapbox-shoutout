import React, { Component } from 'react';

class Logo extends Component {
  render() {
    return (
      <>
        <img className="logo" src={this.props.imageSource} alt="concatenate" />
      </>
    );
  }
}

export default Logo;

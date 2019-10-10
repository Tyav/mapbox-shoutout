import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <>
        <button style={this.props.style} onClick={this.props.onclick}>
          {this.props.text}
        </button>
      </>
    );
  }
}

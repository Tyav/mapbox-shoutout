import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <>
        <button style={this.props.styles} onClick={this.props.onclick}>
          <i className={`mdi mdi-${this.props.icon}`}></i>
          {this.props.text}
        </button>
      </>
    );
  }
}

export default Button;

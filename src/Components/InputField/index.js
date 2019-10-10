import React, { Component } from 'react';

class InputField extends Component {
  render() {
    return (
      <>
        <input
          type={this.props.type}
          value={this.props.value}
          name={this.props.name}
          id={this.props.id}
          onChange={this.props.onchange}
          onClick={this.props.onclick}
          placeholder={this.props.placeholder}
        />
      </>
    );
  }
}

export default InputField;

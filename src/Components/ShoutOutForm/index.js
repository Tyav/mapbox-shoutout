import React, { Component } from 'react';
import InputField from '../InputField';

class ShoutOutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      image: '',
      videoUrl: '',
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <>
        <form id="shoutoutForm">
          <p>Fill to Create Shout Out</p>
          <div id="imagePreview">
            <img src="/assets/img/textimage.jpg" alt="profile preview" />
          </div>
          <InputField
            type="text"
            id="name"
            name="name"
            onchange={this.handleChange.bind(this)}
            placeholder="Display Name"
            value={this.state.name}
          />
          <InputField
            type="text"
            id="location"
            name="location"
            placeholder="Your Location"
            onchange={this.handleChange.bind(this)}
            value={this.state.location}
          />
          <InputField
            type="file"
            id="image"
            name="image"
            value={this.state.image}
          />

          <InputField
            type="text"
            id="videoUrl"
            name="videoUrl"
            onchange={this.handleChange.bind(this)}
            placeholder="Video link if any"
            value={this.state.videoUrl}
          />
          <InputField
            type="submit"
            id="submitSo"
            name="submitSo"
            onchange={this.handleChange}
            value="Push da SO"
            onclick={this.handleFormSubmit.bind(this)}
          />
        </form>
      </>
    );
  }
}

export default ShoutOutForm;

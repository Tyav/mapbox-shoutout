import React, { Component } from 'react';
import './App.css';
import MapBox from './Components/MapBox';
import Button from './Components/Button';
import Logo from './Components/Logo';
import ShoutOutForm from './Components/ShoutOutForm';

class App extends Component {
  state = {
    showForm: false,
  };

  buttonStyles = {
    position: 'fixed',
    zIndex: '9999999999999',
    padding: '20px 30px',
    right: '10%',
    top: '5%',
    lineHeight: '0px',
    border: 'none',
    background: '#faba48',
    color: '#000',
    borderRadius: '30px',
    fontSize: '0.8rem',
    fontWeight: '500',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: '0.9',
    boxShadow: '0 0 15px #faba48',
    outline: 'none',
    cursor: 'pointer',
  };

  render() {
    return (
      <>
        {this.state.showForm ? <ShoutOutForm /> : ''}
        <div className="mainHeader">
          <Logo imageSource={`/assets/img/concatenate.png`}></Logo>
          <Button
            styles={this.buttonStyles}
            icon={!this.state.showForm ? 'rss' : 'close'}
            text={!this.state.showForm ? 'Give a shoutout' : 'Close Form'}
            onclick={event => {
              event.preventDefault();
              this.setState({ showForm: !this.state.showForm });
            }}
          />
        </div>
        <MapBox></MapBox>
      </>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Sb3Downloader from './sb3-downloader.jsx';

class SaveButton extends Component {
    
  handleClick = () => {
    // Add your save logic here
    console.log('Save button clicked!');
  }

  render() {
    return (
        <>
        <button>Save</button>
        </> 
    );
  }
}

export default SaveButton;

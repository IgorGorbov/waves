import React, { Component } from 'react';
import Slider from './slider';
import Promotion from './promotion';


export default class Home extends Component {
  render() {
    return (
      <div>
        <Slider />
        <Promotion />
      </div>
    );
  }
}

import React, { Component } from 'react';

import Card from "./Card";

import { HandWrapper } from "../constants/UI/Wrappers"
//==============================================================//

class DealerHand extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <HandWrapper>
        {/* left card */}
        <Card suit={"X"} value={2}/>

        {/* right card */}
        <Card suit={"O"} value={10}/>
      </HandWrapper>
    )
  }
}

export default DealerHand;
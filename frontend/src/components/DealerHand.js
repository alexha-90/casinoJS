import React, { Component } from 'react';

import Card from "./Card";

import { HandWrapper } from "../constants/UI/Wrappers"
import { DEALER_HAND_BG } from "../constants/UI/Palette"
//==============================================================//

class DealerHand extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <HandWrapper backgroundColor={DEALER_HAND_BG}>
        {/* left card */}
        <Card suit={"X"} value={2}/>

        {/* right card */}
        <Card suit={"O"} value={10}/>
      </HandWrapper>
    )
  }
}

export default DealerHand;
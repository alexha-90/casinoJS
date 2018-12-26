import React, { Component } from 'react';

import Card from "./Card";

import { HandWrapper } from "../constants/UI/Wrappers"
import { DEALER_HAND_BG } from "../constants/UI/Palette"
//==============================================================//

type Props = {
  newGame: boolean
};

type State = {

};

class DealerHand extends Component<Props, State> {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const { newGame } = this.props;

    return (
      <HandWrapper backgroundColor={DEALER_HAND_BG}>
        {/* left card */}
        <Card suit={"X"} value={2} newGame={newGame}/>

        {/* right card */}
        <Card suit={"O"} value={10} newGame={newGame}/>
      </HandWrapper>
    )
  }
}

export default DealerHand;
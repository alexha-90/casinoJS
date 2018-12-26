import React, { Component } from 'react';

import Card from "./Card";

import { HandWrapper } from "../constants/UI/Wrappers"
import { DEALER_HAND_BG } from "../constants/UI/Palette"
//==============================================================//

type Props = {
  showDealerFirstCard: boolean,
  showDealerSecondCard: boolean
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
    const {
      showDealerFirstCard,
      showDealerSecondCard
    } = this.props;

    return (
      <HandWrapper backgroundColor={DEALER_HAND_BG}>
        {/* left card */}
        <Card suit={"X"} value={2} show={showDealerFirstCard}/>

        {/* right card */}
        <Card suit={"O"} value={10} show={showDealerSecondCard}/>
      </HandWrapper>
    )
  }
}

export default DealerHand;
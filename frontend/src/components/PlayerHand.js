import React, { Component } from 'react';

import Card from "./Card";

import { HandWrapper } from "../constants/UI/Wrappers"
import { PLAYER_HAND_BG } from "../constants/UI/Palette"
//==============================================================//

type Props = {
  showPlayerFirstCard: boolean,
  showPlayerSecondCard: boolean
};

type State = {};

class PlayerHand extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const {
      showPlayerFirstCard,
      showPlayerSecondCard
    } = this.props;

    return (
      <HandWrapper backgroundColor={PLAYER_HAND_BG}>
        {/** left card **/}
        <Card
          suit={"G"}
          value={"6"}
          show={showPlayerFirstCard}
        />
        {/** right card **/}
        <Card
          suit={"M"}
          value={"7"}
          show={showPlayerSecondCard}
        />
      </HandWrapper>
    )
  }
}

export default PlayerHand;
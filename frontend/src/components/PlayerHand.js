import React, { Component } from 'react';
import styled from "styled-components";

import Card from "./Card";

import { HandWrapper } from "../constants/UI/Wrappers"
import { PLAYER_HAND_BG } from "../constants/UI/Palette"
//==============================================================//

type Props = {

};

type State = {

};

class PlayerHand extends Component<Props, State> {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const { newGame } = this.props;

    return (
      <HandWrapper backgroundColor={PLAYER_HAND_BG}>
        {/* left card */}
        <Card suit={"G"} value={"6"} newGame={newGame}/>

        {/* right card */}
        <Card suit={"M"} value={"7"} newGame={newGame}/>
      </HandWrapper>
    )
  }
}

export default PlayerHand;
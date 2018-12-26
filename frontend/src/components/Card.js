import React, { Component } from 'react';
import styled from "styled-components";

import { getCardValueAndSuit } from "../util/index"

import { CARD_MARGIN } from "../constants/UI/Spacing"
import { WHITE } from "../constants/UI/Palette"
//==============================================================//

const Container = styled.div`
  margin: ${CARD_MARGIN}px;
  box-sizing: border-box;
  border: 1px solid black;
  background-color: ${WHITE};
  flex: 1;
`;

const CasinoLogo = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`

const TopDetails = styled.div`
  flex: 1;
  height: 30%;
  text-align: left;
  padding: 5px 0 0 10px;
  flex-direction: row;
  box-sizing: border-box;
`;

const MiddleDetails = styled.div`
  flex: 1;
  height: 40%;
  padding: 5px 0;
  text-align: center;
  box-sizing: border-box;
`;

const BottomDetails = styled.div`
  flex: 1;
  height: 30%;
  text-align: right;
  padding: 0 10px 5px 0;
  flex-direction: row;
  box-sizing: border-box;
`;

const CardVal = styled.div``;

const Suit = styled.div``;

type Props = {
  suit: string,
  value: number,
  newGame: boolean,
  show: boolean
}

type State = {
  // value: number | string,
  // suit: string
};


class Card extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      // value: null,
      // suit: null
    }
  }

  render() {
    const {
      suit,
      value,
      show,
    } = this.props;
    if (show) {
      return (
        <Container>
          <TopDetails>
            <CardVal>{value}</CardVal>
            <Suit>{suit}</Suit>
          </TopDetails>
          <MiddleDetails>{suit}</MiddleDetails>
          <BottomDetails>
            <CardVal>{value}</CardVal>
            <Suit>{suit}</Suit>
          </BottomDetails>
        </Container>
      )
    } else {
      // initial state. Card has not been dealt yet. Show backside
      return (
        <Container>
          <CasinoLogo>
            Casino JS
          </CasinoLogo>
        </Container>
      )
    }
  }
}

export default Card;
import React, { Component } from 'react';

import Card from "./Card";
import { getCardValueAndSuit } from "../util/index"

import { HandWrapper } from "../constants/UI/Wrappers"
import { PLAYER_HAND_BG } from "../constants/UI/Palette"
//==============================================================//

type Props = {
  showPlayerFirstCard: boolean,
  showPlayerSecondCard: boolean
};

type State = {
  firstCard: {
    value: any, // FIXME: type check
    suit: any
  },
  secondCard: {
    value: any,
    suit: any
  }
};

class PlayerHand extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      firstCard: {
        value: null,
        suit: null
      },
      secondCard: {
        value: null,
        suit: null
      }
    };
  }

  componentDidUpdate() {
    const {
      props: { showPlayerFirstCard, showPlayerSecondCard},
      state: { firstCard, secondCard }
    } = this;
    // FIXME: should compare props.deck.length
    // should dispatch global action to compare value w/ dealer
    if (showPlayerFirstCard && !firstCard.value) {
      const card = getCardValueAndSuit();
      this.setState({
        firstCard: {
          value: card.value,
          suit: card.suit
        }
      })
    }

    if (showPlayerSecondCard & !secondCard.value) {
      const card = getCardValueAndSuit();
      this.setState({
        secondCard: {
          value: card.value,
          suit: card.suit
        }
      })
    }
  }


  render() {
    const {
      props: { showPlayerFirstCard, showPlayerSecondCard},
      state: { firstCard, secondCard }
    } = this;

    return (
      <HandWrapper backgroundColor={PLAYER_HAND_BG}>
        {/** left card **/}
        <Card
          suit={firstCard.suit}
          value={firstCard.value}
          show={showPlayerFirstCard}
        />
        {/** right card **/}
        <Card
          suit={secondCard.suit}
          value={secondCard.value}
          show={showPlayerSecondCard}
        />
      </HandWrapper>
    )
  }
}

export default PlayerHand;
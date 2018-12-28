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
  totalSum: number,
  firstCard: {
    value: any, // FIXME: type check
    suit: any,
    weight: any
  },
  secondCard: {
    value: any,
    suit: any,
    weiht: any
  }
};

class PlayerHand extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      totalSum: 0,
      firstCard: {
        value: null,
        suit: null,
        weight: null,
      },
      secondCard: {
        value: null,
        suit: null,
        weight: null,
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
      this.setState({ firstCard: {...card} })
    }

    if (showPlayerSecondCard & !secondCard.value) {
      const card = getCardValueAndSuit();
      this.setState({
        totalSum: firstCard.weight + card.weight,
        secondCard: { ...card}
      })
    }
  }


  render() {
    const {
      props: { showPlayerFirstCard, showPlayerSecondCard},
      state: { firstCard, secondCard, totalSum }
    } = this;

    return (
      <HandWrapper backgroundColor={PLAYER_HAND_BG}>
        {totalSum > 11 ? <div>Bust! Over 11</div> : ""}
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
import React, { Component } from 'react';
import styled from "styled-components";

import DealerHand from "./DealerHand";
import PlayerHand from "./PlayerHand";
import { mimicDeal } from "../util/index"

import {
  DesktopWrapper,
  TableWrapper
} from "../constants/UI/Wrappers"
import { CONTENT_CONTAINER } from "../constants/UI/Sizing"
import { DEAL_DELAY_TIME } from "../constants/UI/index"
//==============================================================//

// FIXME: needs adjustment
const DealerDiv = styled.div`
  position: relative;
  top: 10%;
  text-align: center;
  user-select: none;
  width: 240px;
  height: 160px;
  margin: 0 auto;
`;

const TableHeadlineWrapperLG = styled.div`
  position: absolute;
  width: ${CONTENT_CONTAINER}px;
  top: 40%;
  text-align: center;
  user-select: none;
`;

const PlayerDiv = styled.div`
  position: relative;
  top: 40%;
  text-align: center;
  user-select: none;
  width: 240px;
  height: 160px;
  margin: 0 auto;
`;

const RoleHeadline = styled.div`
  margin-bottom: 5px;
`;

const CTAWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  background-color: red;
  box-sizing: border-box;
  display: flex;
  > button {
    flex: 1;
    justify-content: space-between;
  }
`;

const DealBtn = styled.button`
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
`;

const HitBtn = styled.button`
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
`;

const StayBtn = styled.button`
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
`;

type Props = {
  number: number
};

type State = {
  newGame: boolean,
  playerActionReady: boolean,
  showPlayerFirstCard: boolean,
  showPlayerSecondCard: boolean,
  showDealerFirstCard: boolean,
  showDealerSecondCard: boolean
};

class GameTable extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      newGame: false,
      showPlayerFirstCard: false,
      showPlayerSecondCard: false,
      showDealerFirstCard: false,
      showDealerSecondCard: false
    };
  }

  onClickDealBtn = async ():void => {
    await mimicDeal(DEAL_DELAY_TIME);
    this.setState({ newGame: true, showPlayerFirstCard: true });
    await mimicDeal(DEAL_DELAY_TIME);
    this.setState({ showDealerFirstCard: true });
    await mimicDeal(DEAL_DELAY_TIME);
    this.setState({
      showPlayerSecondCard: true,
      playerActionReady: true
    });
  }

  render() {
    const {
      props: { number },
      state: {
        newGame,
        playerActionReady,
        showPlayerFirstCard,
        showPlayerSecondCard,
        showDealerFirstCard,
        showDealerSecondCard
      }
    } = this;
    return (
      <DesktopWrapper>
        <TableWrapper>
          <DealerDiv>
            <RoleHeadline>Dealer</RoleHeadline>
            <DealerHand
              showDealerFirstCard={showDealerFirstCard}
              showDealerSecondCard={showDealerSecondCard}
            />
          </DealerDiv>
          <TableHeadlineWrapperLG>
            <h1>Table {number}</h1>
          </TableHeadlineWrapperLG>
          <PlayerDiv>
            <RoleHeadline>Player 1</RoleHeadline>
            <PlayerHand
              showPlayerFirstCard={showPlayerFirstCard}
              showPlayerSecondCard={showPlayerSecondCard}
            />
            <CTAWrapper>
              <DealBtn
                disabled={newGame}
                onClick={this.onClickDealBtn}
              >
                Deal
              </DealBtn>
              <HitBtn
                disabled={!playerActionReady}
              >
                Hit
              </HitBtn>
              <StayBtn
                disabled={!playerActionReady}
              >
                Stay
              </StayBtn>
            </CTAWrapper>
          </PlayerDiv>
        </TableWrapper>
      </DesktopWrapper>
    )
  }
}

export default GameTable;
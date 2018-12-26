import React, { Component } from 'react';
import styled from "styled-components";

import DealerHand from "./DealerHand";
import PlayerHand from "./PlayerHand";

import {
  DesktopWrapper,
  TableWrapper
} from "../constants/UI/Wrappers"
import { CONTENT_CONTAINER } from "../constants/UI/Sizing"
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

type Props = {
  number: number
};

type State = {
  newGame: boolean
};

class GameTable extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      newGame: false
    };
  }

  onClickDealBtn = ():void => {
    this.setState({ newGame: true });
  }


  render() {
    const {
      props: { number },
      state: { newGame }
    } = this;
    return (
      <DesktopWrapper>
        <TableWrapper>
          <DealerDiv>
            <RoleHeadline>Dealer</RoleHeadline>
            <DealerHand
              newGame={newGame}
            />
          </DealerDiv>
          <TableHeadlineWrapperLG>
            <h1>Table {number}</h1>
          </TableHeadlineWrapperLG>
          <PlayerDiv>
            <RoleHeadline>Player 1</RoleHeadline>
            <PlayerHand
              newGame={newGame}
            />
            <CTAWrapper>
              <DealBtn
                disabled={newGame}
                onClick={this.onClickDealBtn}
              >
                Deal
              </DealBtn>
              <button>Hit</button>
              <button>Stay</button>
            </CTAWrapper>
          </PlayerDiv>
        </TableWrapper>
      </DesktopWrapper>
    )
  }
}

export default GameTable;
import React from 'react';
import styled from "styled-components";

import DealerHand from "./DealerHand";
import PlayerHand from "./PlayerHand";

import {
  DesktopWrapper,
  TableWrapper,
  TableHeadlineWrapper,
} from "../constants/UI/Wrappers"
//==============================================================//

type Props = {
  number: number
}

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

const PlayerDiv = styled.div`
  position: relative;
  top: 40%;
  text-align: center;
  user-select: none;
  background-color: green;
  width: 240px;
  height: 160px;
  margin: 0 auto;
`;

const GameTable = (props: Props) => {
  const { number } = props;
  return (
    <DesktopWrapper>
      <TableWrapper>
        <DealerDiv>
          <DealerHand />
        </DealerDiv>
        <TableHeadlineWrapper>
          <h1>Table {number}</h1>
        </TableHeadlineWrapper>
        <PlayerDiv>
          <PlayerHand />
        </PlayerDiv>
      </TableWrapper>
    </DesktopWrapper>
  )
}

export default GameTable;
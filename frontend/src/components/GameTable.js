import React from 'react';
import styled from "styled-components";

import DealerHand from "./DealerHand";
import PlayerHand from "./PlayerHand";

import {
  DesktopWrapper,
  TableWrapper
} from "../constants/UI/Wrappers"
import { CONTENT_CONTAINER } from "../constants/UI/Sizing"
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
  background-color: green;
  width: 240px;
  height: 160px;
  margin: 0 auto;
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

const GameTable = (props: Props) => {
  const { number } = props;
  return (
    <DesktopWrapper>
      <TableWrapper>
        <DealerDiv>
          <DealerHand />
        </DealerDiv>
        <TableHeadlineWrapperLG>
          <h1>Table {number}</h1>
        </TableHeadlineWrapperLG>
        <PlayerDiv>
          <PlayerHand />
          <CTAWrapper>
            <button>Deal</button>
            <button>Hit</button>
            <button>Stay</button>
          </CTAWrapper>
        </PlayerDiv>
      </TableWrapper>
    </DesktopWrapper>
  )
}

export default GameTable;
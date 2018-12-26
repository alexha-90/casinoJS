import React from 'react';
import styled from "styled-components";

import {
  DesktopWrapper,
  TableWrapper,
  TableHeadlineWrapper,
} from "../constants/UI/Wrappers"
//==============================================================//

type Props = {
  number: number
}

const GameTable = (props: Props) => {
  const { number } = props;
  return (
    <DesktopWrapper>
      <TableWrapper>
        <TableHeadlineWrapper>
          <h1>Table {number}</h1>
        </TableHeadlineWrapper>
      </TableWrapper>
    </DesktopWrapper>
  )
}

export default GameTable;
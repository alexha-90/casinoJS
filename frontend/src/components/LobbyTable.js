import React from 'react';

import { TableWrapper, TableHeadlineWrapper } from "../constants/UI/Wrappers"
//==============================================================//

type Props = {
  number: number
}

const LobbyTable = (props: Props) => {
  const { number, onClick } = props;
  return (
    <TableWrapper
      forLobby={true}
      onClick={onClick}
    >
      <TableHeadlineWrapper>
        <h1>Table {number}</h1>
      </TableHeadlineWrapper>

    </TableWrapper>
  )
}

export default LobbyTable;
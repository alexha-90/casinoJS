import React, { Component } from 'react';
import styled from "styled-components";

import LobbyTable from "./LobbyTable";
import GameTable from "./GameTable";

import { DesktopWrapper } from "../constants/UI/Wrappers"
import { CONTENT_CONTAINER } from "../constants/UI/Sizing"
//==============================================================//

const LobbyRow = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  order: ${props => props.order};
  margin: ${props => props.middle ? "80px 0" : "0"};
`;

const EmptyDivider = styled.div`
  user-select: none;
  min-width: ${CONTENT_CONTAINER/4}px;
  flex-basis: 100%;
`;

class Lobby extends Component {
  constructor() {
    super();
    this.state = {
      activeLobbyTable: null
    };
  }

  onUserSelectLobbyTable = (num: number): void => {
    this.setState({ activeLobbyTable: num})
  }

  render() {
    if (this.state.activeLobbyTable > 0) {
      return (
        <GameTable
          number={this.state.activeLobbyTable}
        />
      )
    }

    return (
      <DesktopWrapper>
        <LobbyRow order={1}>
          <EmptyDivider />
          <LobbyTable
            number={1}
            onClick={() => this.onUserSelectLobbyTable(1)}
          />
          <EmptyDivider />
        </LobbyRow>
        <LobbyRow order={2} middle={true}>
          <LobbyTable
            number={2}
            onClick={() => this.onUserSelectLobbyTable(2)}
          />
          <EmptyDivider />
          <LobbyTable
            number={3}
            onClick={() => this.onUserSelectLobbyTable(3)}
          />
        </LobbyRow>
        <LobbyRow order={3}>
          <EmptyDivider />
          <LobbyTable
            number={4}
            onClick={() => this.onUserSelectLobbyTable(4)}
          />
          <EmptyDivider />
        </LobbyRow>
      </DesktopWrapper>
    )
  }
}

export default Lobby;
import React, { Component } from 'react';
import styled from "styled-components";

import Table from "../components/Table";

import { CONTENT_CONTAINER } from "../constants/UI/Sizing"
//==============================================================//

const DesktopContainer = styled.section`
  width: ${CONTENT_CONTAINER}px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  margin: 10vh auto;
`;

const Row = styled.div`
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

    };
  }

  render() {
    return (
      <DesktopContainer>
        <Row order={1}>
          <EmptyDivider />
          <Table number={1}/>
          <EmptyDivider />
        </Row>
        <Row order={2} middle={true}>
          <Table number={2}/>
          <EmptyDivider />
          <Table number={3}/>
        </Row>
        <Row order={3}>
          <EmptyDivider />
          <Table number={4}/>
          <EmptyDivider />
        </Row>
      </DesktopContainer>
    )
  }
}

export default Lobby;
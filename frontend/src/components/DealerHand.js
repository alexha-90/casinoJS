import React, { Component } from 'react';
import styled from "styled-components";

import Card from "./Card";
//==============================================================//

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid white;
  display: flex;
  justify-content: space-between;
`;

class DealerHand extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <Container>
        {/* left card */}
        <Card suit={"X"} value={2}/>

        {/* right card */}
        <Card suit={"O"} value={10}/>
      </Container>
    )
  }
}

export default DealerHand;
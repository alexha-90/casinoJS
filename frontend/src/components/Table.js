import React, { Component } from 'react';
import styled from "styled-components";

//==============================================================//

const Container = styled.div`
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  background-color: gray;
  min-width: 350px;
  :hover {
    background-color: darkgray;
  }
`;

const Headline = styled.div`
  position: relative;
  top: 40%;
  transform: translateY(-50%);
  text-align: center;
  user-select: none;
`;

class Table extends Component {
  render() {
    return (
      <Container>
        <Headline>
          <h1>PLAY ON</h1>
          table {this.props.number}
        </Headline>

      </Container>
    )
  }
}

export default Table;
import React, { Component } from 'react';
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import { FullScreenDiv } from "../constants/UI/Containers"
import { LOBBY } from "../constants/UI/Paths"
//==============================================================//

const CTAbox = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 60%;
  height: 50px;
  margin: 0 auto;
  background-color: red;
  > button {
    display: block;
    margin: 0 auto;
  }
`;

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      showLobby: false
    };
  }

  render() {
    if (this.state.showLobby) {
      return <Redirect push to={LOBBY} />
    }

    return (
      <FullScreenDiv>
        <CTAbox>
          <button onClick={() => this.setState({ showLobby: true })}>
            Enter Casino
          </button>
        </CTAbox>
      </FullScreenDiv>
    )
  }
}

export default Landing;
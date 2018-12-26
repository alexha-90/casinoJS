import React, { Component } from 'react';
import styled from "styled-components";

import Card from "./Card";

import { HandWrapper } from "../constants/UI/Wrappers"
//==============================================================//


class PlayerHand extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <HandWrapper>
        {/* left card */}
        <Card suit={"G"} value={"6"}/>

        {/* right card */}
        <Card suit={"M"} value={"7"}/>
      </HandWrapper>
    )
  }
}

export default PlayerHand;
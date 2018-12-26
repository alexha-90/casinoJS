import React from 'react';
import styled from "styled-components";

import { CardWrapper } from "../constants/UI/Wrappers"
//==============================================================//

const TopDetails = styled.div`
  flex: 1;
  height: 30%;
  text-align: left;
  padding: 5px 0 0 10px;
  flex-direction: row;
  box-sizing: border-box;
`;

const MiddleDetails = styled.div`
  flex: 1;
  height: 40%;
  padding: 5px 0;
  text-align: center;
  box-sizing: border-box;
`;

const BottomDetails = styled.div`
  flex: 1;
  height: 30%;
  text-align: right;
  padding: 0 10px 5px 0;
  flex-direction: row;
  box-sizing: border-box;
`;

const CardVal = styled.div``;

const Suit = styled.div``;

type Props = {
  suit: string,
  value: number
}

const Card = (props: Props) => {
  const { suit, value } = props;
  return (
    <CardWrapper>
      <TopDetails>
        <CardVal>{value}</CardVal>
        <Suit>{suit}</Suit>
      </TopDetails>
      <MiddleDetails>{suit}</MiddleDetails>
      <BottomDetails>
        <CardVal>{value}</CardVal>
        <Suit>{suit}</Suit>
      </BottomDetails>
    </CardWrapper>
  )
};

export default Card;
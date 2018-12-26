import styled from "styled-components";

import { CONTENT_CONTAINER } from "./Sizing"
//==============================================================//

export const FullScreenDiv = styled.div`
  height: 100vh;
  width: 100%;
`;

export const DesktopWrapper = styled.section`
  width: ${CONTENT_CONTAINER}px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  margin: 10vh auto;
`;

export const TableWrapper = styled.div`
  cursor: ${props => props.forLobby ? "pointer" : "default"};
  border: 1px solid black;
  border-radius: 5px;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  background-color: gray;
  min-width: 350px;
  height: ${props => props.forLobby ? "inherit" : "100%"};
  :hover {
    background-color: 
      ${props => props.forLobby ?"darkgray" : "none"};
  }
`;

export const TableHeadlineWrapper = styled.div`
  position: relative;
  top: 40%;
  transform: translateY(-50%);
  text-align: center;
  user-select: none;
`;

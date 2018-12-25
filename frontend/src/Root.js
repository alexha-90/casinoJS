import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./components/Landing";
import Lobby from "./components/Lobby";

import { LOBBY } from "./constants/UI/Paths"

//==============================================================//

// FIXME: replace showLobby so it's in redux instead of local state

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/*Header tbd */}
          <Route exact path="/" component={Landing} />
          <Route exact path={LOBBY} component={Lobby} />
          {/* Footer tbd */}
        </div>
      </BrowserRouter>
    );
  }
}

export default Root;

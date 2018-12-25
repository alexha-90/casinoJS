import React, { Component } from 'react';
//==============================================================//

class Root extends Component {
  render() {
    return (
      <div>
        <button onClick={() => alert('clicked')}>
          Enter Casino
        </button>
      </div>
    );
  }
}

export default Root;

import React from 'react';
import ReactDOM from 'react-dom';

class Ui extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div style={{ position: 'absolute', top: '0', left: '0' }}>
        {/*}<button>Hey I'm a button!</button>*/}
      </div>

    )
  }
}

export default Ui

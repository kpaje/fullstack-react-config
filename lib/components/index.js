import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <h2>
Hello Class Components --
        {' '}
        {this.state.answer}
      </h2>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

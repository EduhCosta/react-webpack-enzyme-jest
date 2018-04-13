import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { meuState: 'olá mundo' };
  }

  render () {
    return (
      <div>
        <h2>{this.props.titleApp}</h2>
      </div>
    );
  }
}

App.defaultProps = { titleApp: 'My app' };
App.propTypes = { titleApp: PropTypes.string };

export default App;

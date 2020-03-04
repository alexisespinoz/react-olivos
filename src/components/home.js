import React from 'react';
import {Link, withRouter} from 'react-router-dom';


class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
     
    };

    
  }

 

  render() {
    return (
        <h1>Hola soy Home</h1>
    )
  }
}

export default withRouter(Home);

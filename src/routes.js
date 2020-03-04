import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/home';
import Indicators from './components/indicators';
import Login from './components/login';




const Child = (props) => {
    if (props.match.params.id == "home"){return(<Home {...props} />)};
    if (props.match.params.id == "indicadores"){return(<Indicators {...props} />)};
    if (props.match.params.id == "login" )  { return(<Login {...props} />)};
}


class Routes extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
        return(
          
            <Router>
                <Route exact path='/:id' render={Child} />
                <Route exact path='/' render={Login} />
            </Router>
  
      )
    }
}
export default Routes;
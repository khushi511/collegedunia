import React from 'react';
import {render} from 'react-dom';

import "./index.scss";
import {About} from './jsx/about.jsx'
import {Menu} from './jsx/menu.jsx'
import {
    browserHistory,
    Router,
    Route,
    Link,
    IndexRoute,
} from 'react-router';

class App extends React.Component {    
  render () {
    return (
    	<main className="main">
    		<Menu/>
    	   {this.props.children}
        </main>
    )
  }
}
var routes = (
        <Router addHandlerKey={true} history={browserHistory}>
            <Route  path="/"    component={App}>
                <IndexRoute name="/"         component={About}/>
                <Route path="/about" component={About} />
                <Route path="/skills" component={About}/>
                <Route path="/portfolio" component={About}/>
                <Route path="/experience" component={About}/>
                <Route path="/reference" component={About}/>
                <Route path="/blog" component={About}/>
                <Route path="/calendar" component={About}/>
                <Route path="/contact" component={About}/>
            </Route>
        </Router>
);

render(routes, document.getElementById('app'));
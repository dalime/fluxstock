import React from 'react';
import { render } from 'react-dom';

import App from './components/App'

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='search' component={SymbolSearch} />
      <Route path='quotes/:symbol' component={OneSymbol}/>
    </Route>
  </Router>
), document.getElementById('root')
);

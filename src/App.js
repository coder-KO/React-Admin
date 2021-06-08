import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

import Layout from './Layout';
import Forms from './pages/Forms';

import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            {/* Login Route */}
            <Route exact path='/login' component={Login} />

            {/* Dashboard Routes */}
            <Layout>
              <Switch>
                <Route exact path='/' component={Home} />

                <Route exact path='/products' component={Products} />

                <Route exact path='/forms' component={Forms} />
              </Switch>
            </Layout>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;

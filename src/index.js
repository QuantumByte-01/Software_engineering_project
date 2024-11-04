// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import './style.css';
import Model from './views/model';
import Survey from './views/survey';
import Home from './views/home';
import NotFound from './views/not-found';

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID; // Ensure this is set in .env

const App = () => {
  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/model" component={Model} />
          <Route exact path="/survey" component={Survey} />
          <Route component={NotFound} /> {/* Catch-all route for undefined paths */}
        </Switch>
      </Router>
    </GoogleOAuthProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

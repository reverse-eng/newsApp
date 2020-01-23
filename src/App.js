import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import Home from './containers/Home';
import Layout from './containers/Layout';
import UKNews from './containers/UKNews';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import './App.css';

const App = () => {
  return(
    <Layout >
      <Switch>
        
        <Route path="/country/:id">
          <UKNews />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        
      </Switch>
      </Layout>

  )
}

export default App;

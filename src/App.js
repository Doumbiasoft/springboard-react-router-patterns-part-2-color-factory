import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ColorsList from './ColorsList';
import ColorDetail from './ColorDetail';
import ColorForm from './ColorForm';
import useColors from './useColors';

import './App.css';

function App() {
  const [colors, addColor] = useColors();

  return (
      <Switch>
        <Route exact path="/colors" render={(props) => <ColorsList {...props} colors={colors} />} />
        <Route path="/colors/new" render={(props) => <ColorForm {...props} addColor={addColor} />} />
        <Route path="/colors/:color" render={(props) => <ColorDetail {...props} colors={colors} />} />
        <Redirect exact from="/" to="/colors" />
        <Redirect to="/colors" />
      </Switch>
  );
}

export default App;

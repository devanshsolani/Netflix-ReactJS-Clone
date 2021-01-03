import React from 'react';
import './css/Main.css';
import Main from './pages';
import Login from './pages/Login';

import { Switch, Route } from 'react-router-dom';
import ChoosePlan from './pages/ChoosePlan';
import Fortv from './components/Fortv'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/choose-plan" component={ChoosePlan} />
        <Route path="/Fortv"  component={Fortv}/>
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import Login from './components/Login';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/employees" component={EmployeeList} />
      </Switch>
    </Router>
  );
};

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from "./components/MainPage";
import Exercise from "./components/Exercise";

const App = () => {
    return (
      <main>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/exercises/:name" component={Exercise} exact/>
          <Route component={Error} />
        </Switch>
      </main>
  );
};

export default App;

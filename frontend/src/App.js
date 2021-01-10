import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from "./MainPage";

const App = () => {
    return (
      <main>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route component={Error} />
        </Switch>
      </main>
  );
};

export default App;

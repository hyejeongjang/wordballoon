import React from "react";
import { Route } from "react-router-dom";

import HomePage from "./Page/HomePage";
import LoginPage from "./Page/LoginPage";
import JoinPage from "./Page/JoinPage";
import ViewPage from "./Page/ViewPage";

const App = () => {
  return (
    <div>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/Login" component={LoginPage} />
      <Route path="/Join" component={JoinPage} />
      <Route path="/View" component={ViewPage} />
    </div>
  );
};

export default App;

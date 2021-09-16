import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import ContactList from "./pages/ContactList";
import ContactRegister from "./pages/ContactRegister";
import NotFound from "./pages/NotFound";
import cookie from "react-cookies";
import { useHistory } from "react-router";
import { useState } from "react";

const getCurrentUser = () => {
  return cookie.load("accessToken");
};

function App() {
  const history = useHistory();

  if(getCurrentUser() === undefined) {
    history.push("/");
  } else {
    history.push("/list");
  }
  return (
    <Switch>
      <Route exact path="/list" component={ContactList} />
      <Route exact path={['/add', `/edit/:id`]} component={ContactRegister} />
      <Route exact path="/" component={Login} />
      <Route path="/" component={NotFound} />
    </Switch>
  );
}

export default App;

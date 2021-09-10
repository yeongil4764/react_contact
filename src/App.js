import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import ContactList from "./pages/ContactList";
import ContactRegister from "./pages/ContactRegister";
import NotFound from "./pages/NotFound";

function App() {
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

import MainPage from "./components/MainPage";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}
export default App;

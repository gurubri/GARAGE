import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Header from "./components/header";
import Signin from "./components/signin/SignIn";
import PrivateRoute from "./HOC/PrivateRoute";
import Home from "./components/Home/Pricing";
import Signup from "./components/signup/SignUp";
import Services from "./components/services";
import Order from "./components/order";
import NotFoundView from "./NotFoundView";
import Logout from "./components/logout";
import Orders from "./components/orders";

const App = () => {
  return (
    <Router>
      <Switch>
        <Header>
          <PrivateRoute path="/" component={Home} exact />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/logout" component={Logout} />
          <PrivateRoute path="/services/:name" component={Order} />
          <PrivateRoute path="/services" component={Services} />
          <PrivateRoute path="/orders" component={Orders} />
          <Route path="/404" component={NotFoundView} />
          <Redirect to="/404" from="*" />
        </Header>
      </Switch>
    </Router>
  );
};

export default App;

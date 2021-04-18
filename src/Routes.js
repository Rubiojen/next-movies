import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Cinema from "Screens/Cinema";
import Movie from "Screens/Movie";

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={Cinema} />
      <Route path="/movie/:id" component={Movie} />
    </Switch>
  </Router>
);

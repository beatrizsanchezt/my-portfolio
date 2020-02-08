import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { About, Blog, Education, Layout, Projects, Skills } from "../src/pages";

function App() {
  return (
    <Fragment>
      <Layout>
        <Switch>
          <Route path="/blog" component={Blog} />
          <Route path="/education" component={Education} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/" component={About} />
        </Switch>
      </Layout>
    </Fragment>
  );
}

export default App;

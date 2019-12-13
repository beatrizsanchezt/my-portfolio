import React from 'react';
import {Route, Switch } from 'react-router-dom';
import About from './pages/about/about'
import Blog from './pages/blog/blog'
import Education from './pages/education'
import Projects from './pages/projects'
import Skills from './pages/skills/skills'
import Layout from './pages/layout'


function App() {
  return (
    <React.Fragment>
      <Layout>
        <Switch>
          <Route path="/blog" component= {Blog} />
          <Route path="/education" component= {Education} />
          <Route path="/projects" component= {Projects} />
          <Route path="/skills" component= {Skills} />
          <Route path="/" component= {About} />
        </Switch>
      </Layout>
    </React.Fragment>
  );
}

export default App;

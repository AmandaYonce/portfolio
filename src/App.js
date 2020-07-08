import React from 'react';
import Header from './Components/Header';
import {Route} from "react-router-dom"
import Resume from "./Components/Resume"
import Main from "./Components/main"
import Projects from "./Components/Projects"
import Photos from "./Components/Photos"

const App = () => (
  <section>
    <Header />
    <Route exact path="/" component={Main} />
    <Route path="/resume" component={Resume} />
    <Route path="/codesamples" component={Projects} />
    <Route path="/photos" component={Photos} />
  </section>
);

export default App;

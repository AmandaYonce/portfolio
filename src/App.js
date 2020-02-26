import React from 'react';
import Header from './Components/Header';
import {Route} from "react-router-dom"
import Resume from "./Components/Resume"
import Main from "./Components/main"

const App = () => (
  <section>
    <Header />
    <Route exact path="/" component={Main} />
    <Route path="/resume" component={Resume} />
      
  </section>
);

export default App;

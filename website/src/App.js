import React from 'react';
import { Route, Switch } from 'react-router-dom'

import AboutPage from './pages/AboutPage'
import WorkPage from './pages/WorkPage'
import WritingPage from './pages/WritingPage'
import MusicPage from './pages/MusicPage'

import Post00 from './writingposts/Post00'

import './App.css';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={AboutPage} />
      <Route exact path="/work" component={WorkPage} />
      <Route exact path="/writing" component={WritingPage} />
      <Route exact path="/music" component={MusicPage} />

      <Route exact path="/writing/post00" component={Post00} />
    </Switch>
  );
}

export default App;

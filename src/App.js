import React from 'react';
import { Route } from 'wouter';

import './App.css';

import HomePage from 'Pages/HomePage/index';
import Films from 'Pages/Films/index';
import FilmsReviews from 'Pages/FilmsReviews/index';
import Donations from 'Pages/Donations/index';
import UserReviews from 'Pages/UserReviews/index';
import Settings from 'Pages/Settings/index';
import LogIn from 'Pages/LogIn/index';

function App() {

  return (
    <div className="App">
        <Route path="/" component={HomePage} />
        <Route path="/films" component={Films} />
        <Route path="/films/:film" component={FilmsReviews} />
        <Route path="/donations" component={Donations} />
        <Route path="/userReviews" component={UserReviews} />
        <Route path="/settings" component={Settings} />
        <Route path="/login" component={LogIn} />
    </div>
  );
}
export default App;
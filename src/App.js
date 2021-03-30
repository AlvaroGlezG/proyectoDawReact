import React from 'react';
import { Route } from 'wouter';

import './App.css';

import Header from 'Pages/Header/index';
import Form from 'Pages/Form/index';
import LogIn from 'Pages/LogIn/index';

function App() {

  return (
    <div className="App">
      <section className=".App-header">
        <Route path="/" component={Header}/>
      </section>
      <section className="form">
        <Route path="/" component={Form}/>
      </section>
      <Route path="/login" component={LogIn} />
    </div>
  );
}
export default App;
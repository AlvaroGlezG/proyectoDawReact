import React from 'react';
import './App.css';

import Header from 'Pages/Header/index';
import Form from 'Pages/Form/index';

function App() {

  return (
    <div className="App">
      <section className=".App-header">
        <Header/>
      </section>
      <section className="form">
        <Form />
      </section>
    </div>
  );
}
export default App;
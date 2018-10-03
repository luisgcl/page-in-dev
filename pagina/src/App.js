import React, { Component } from 'react';


import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

import './App.css';
import './components/css/Header.css';
import './components/css/Content.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Content />
        <Footer />
      </div>
    );
  }
}

export default App;

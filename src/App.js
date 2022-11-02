import React, { Component } from 'react';
import Header from './Components/Header';
import Banner from './Components/Body/Banner';
import Item from './Components/Body/Item';
import Footer from './Components/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Banner/>
        <Item/>
        <Footer/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import sampleCats from './sample-cats';
import Cat from './Cat';

class App extends Component {

constructor(){
super();

// initial state
this.state = {
  cats: sampleCats
  }

}



  render() {
    return (
      <div className="cat-names">
      
      <h1>Your catnames:</h1>
      <ul className="list-of-cats">
            {
              Object
                .keys(this.state.cats)
                .map(key => <Cat key={key} index={key} details={this.state.cats[key]}/>)
            }
          </ul>
      </div>
    );
  }
}

export default App;

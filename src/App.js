import React, { Component } from 'react';
import './App.css';


import sampleCats from './sample-cats';
import Cat from './Cat';

class App extends Component {


constructor(){
super();

this.getRandomCatNames = this.getRandomCatNames.bind(this);

// initial state
this.state = {
  cats: sampleCats
  }
}

getRandomCatNames(source, neededNumber){

  let result = [];

  for (var i = 0; i < neededNumber; i++) {
    result.push(source[Math.floor(Math.random()*source.length)]);
}
return result;

} 



  render() {
    return (
      <div className="cat-names">
        <h2><span role="img" aria-label="loving cat">😻</span> Let's See Some Cats <span role="img" aria-label="loving cat">😻</span></h2>
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

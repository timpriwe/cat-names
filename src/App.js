import React, { Component } from 'react';
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

componentDidMount(){

  this.setState(

    // this.getRandomCatNames(cats, this.props.match.params.catCount)

      /*Here I want to take my state, make it to an array(?) and use my getRandomCatNames on it with 
      the array as source and this.props.match.params.catCount (which comes from routing) as neededNumber.
      Now I get back an Array with X (neededNumber) cat names which i want to have in state to get them rendered.
      */
  )

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

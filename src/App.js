import React, { Component } from 'react';
import sampleCats from './sample-cats';
import Cat from './Cat';

class App extends Component {

  constructor(props) {
    super(props);

    // initial state
    this.state = {
      cats: sampleCats,
      catsToDisplay: [],
    }
  }

  static getRandomCatNames(cats, catsCount){
    const catNames =
      Object
        .keys(cats)
        .map(key => cats[key].name);

    const shuffledNames = catNames.slice().sort(() => .5 - Math.random()); // shuffle  
    return shuffledNames.slice(0, catsCount); //get sub-array of first n elements AFTER shuffle
  } 

  componentDidMount(){
    if (this.props.match && this.props.match.params && this.props.match.params.catCount) {
      this.setState({
        catsToDisplay:
        App.getRandomCatNames(this.state.cats, this.props.match.params.catCount)
      });
    }
  }

  renderRandomCats() {
    return (
     this.state.catsToDisplay.map(name => <div key={name}>{name}</div>)
    )
  }

  renderCats() {
    return (
      Object
        .keys(this.state.cats)
        .map(key => <Cat key={key} index={key} details={this.state.cats[key]} />)
    );
  }

  render() {
    return (
      <div className="cat-names">
        <h2><span role="img" aria-label="loving cat">😻</span> Let's See Some Cats <span role="img" aria-label="loving cat">😻</span></h2>
        <ul className="list-of-cats">
            {
              this.state.catsToDisplay.length > 0
              ? this.renderRandomCats()
              : this.renderCats()
            }
        </ul>
      </div>
    );
  }
}

export default App;
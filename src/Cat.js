import React from 'react';

class Cat extends React.Component {

render(){

    const { details } = this.props;

    return (

        <li className="cat">
        {details.name}
        </li>

    ) 
    }
}

export default Cat;
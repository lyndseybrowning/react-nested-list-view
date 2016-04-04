import React, { Component } from 'react';
import Node from './Node';

class Organisation extends Component {

  render() {

    let nodes = this.props.people.map(function(person) {
      return (
        <Node node={person} children={person.people} />
      );
    });

    return (
      <div>
        <ul className="org">
         {nodes}
        </ul>
      </div>
    );
  }
}

export default Organisation;

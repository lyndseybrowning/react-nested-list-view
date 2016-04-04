import React, { Component } from 'react';

class Node extends Component {

  render() {

    let childnodes = null;

    if(this.props.children) {
      childnodes = this.props.children.map(function(childnode) {
       return (
         <Node node={childnode} children={childnode.people} />
       );
     });
    }

    return (
      <li key={this.props.node.id}>
        <span>{this.props.node.name}</span>
        { childnodes ?
          <ul>{childnodes}</ul>
        : null }
      </li>
    );
  }
}

export default Node;

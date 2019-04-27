import React, { Component } from 'react';
import './PageHeader.css';

export default class PageHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.click = this.click.bind(this);
    this.contactLink = React.createRef();
  }

  click() {
    this.testCallback();
  }

  render() {
    return (
      <div className="pageheader">
        <div className="Spacer"/>
        <div className="NameLink">
        Chris Harbidge
        </div>
        <div className="contact"  ref={this.contactLink}>
          <a href="#emailAddress" className="contactlink" onClick={this.click}>Contact</a>
        </div>
        { this.props.children }
      </div>
    )
  }
}

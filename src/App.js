import React, { Component } from 'react';
import './App.css';
import PageHeader from './PageHeader/PageHeader';
import Particles from './Particles/Particles';
import EmailForm from './EmailForm/EmailForm';
import * as Scroll from 'react-scroll';

class App extends Component {

  constructor(props) {
    super(props);
    this.header = React.createRef();
    this.particles = React.createRef();
  }

  componentDidMount() {
    this.header.current.testCallback = () => {
      Scroll.animateScroll.scrollToBottom();
    }

  }

  render() {
    return (
      <div className="App">
      <header>
        <PageHeader ref={this.header}/>
      </header>
        <Particles ref={this.particles} style={{}}/>
        <EmailForm />
      </div>
    );
  }
}

export default App;

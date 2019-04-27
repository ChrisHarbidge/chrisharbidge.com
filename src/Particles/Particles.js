import React, { Component } from 'react';
import './Particles.css';

const NumberOfParticles = 50;

export default class Particles extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

    var canvas = this.refs.canvas;

    this.setState({
      canvas: canvas
    }, () => {this.updateDimensions()});

    var ctx = canvas.getContext("2d");
    ctx.fillStyle = '#b3b3b3';

    var particles = [];
    for (var i = 0; i < NumberOfParticles; i ++) {
      particles.push(this.createParticle());
    }

    this.setState({
      ctx: ctx,
      particles: particles
    });

    window.addEventListener('resize', () => this.updateDimensions());

    setInterval(() => this.draw(), 10);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  updateDimensions() {

    var canvas = this.state.canvas;

    canvas.width = window.innerWidth * 0.98;
    canvas.height = window.innerHeight * 0.8;

    this.setState({
      canvas: canvas
    });
  }

  draw() {

    this.state.ctx.clearRect(0, 0, this.state.canvas.width, this.state.canvas.height);

    var ctx = this.state.ctx;

    ctx.font = this.getFont();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    this.setState({ctx: ctx});

    this.state.ctx.fillText("C# and iOS developer", this.state.canvas.width * 0.5, this.state.canvas.height * 0.4);

    for (var i = 0; i < NumberOfParticles; i ++) {

      var particle = this.state.particles[i];

      particle.x += particle.dx;

      particle.y += particle.dy;

      if (particle.x < 1 || particle.x > this.state.canvas.width) {
        particle.dx *= -1;
      }

      if (particle.y < 1 || particle.y > this.state.canvas.height) {
        particle.dy *= -1;
      }

      this.state.ctx.fillRect(particle.x, particle.y, 2, 2);
    }
  }

  // Create a particle

  createParticle() {
    return {
      x: Math.floor(Math.random() * 640),
      y: Math.floor(Math.random() * 425),
      dx: (Math.random() * 1) - 0.5,
      dy: (Math.random() * 1) - 0.5
    }
  }

  getFont() {
    var width = this.state.canvas.width;

    if (width > 600) {
      return '2em proxima-nova';
    } else if (width > 450) {
      return '1.5em proxima-nova';
    } else {
      return '1em proxima-nova';
    }
  }

  render() {
    return (
      <div className="particles">
        <canvas ref="canvas"/>
      </div>
    )
  }
}

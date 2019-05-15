import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import normalBaby from './assets/unadulterated-hoglette.png'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

const eyeColorMapper = {
  blue: BlueBaby,
  glowing: GlowingBaby,
  sun: SunBaby
}

export default class BabyHog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      weight: 100,
      height: '200px'
    }
  }

  changeWeight = (e) => {
    // nothing needs to change here
    const newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
    const newHeight = e.target.name === "+" ? (parseInt(this.state.height) + 50) : (parseInt(this.state.height) - 50)

    this.setState({
      weight: newWeight,
      height: newHeight
    })
  }

  render() {
    return (
      <li className="hogbabies">
        <h1>Baby {this.props.babyData.name}</h1>
        <h3>Weight: {this.state.weight} lbs. </h3>
        <h3>Hobby: {this.props.babyData.hobby}</h3>
        <h4>Eye Color: {this.props.eyeColor}</h4>

        <Button name="+" onClick={this.changeWeight}>
          Increase Weight
        </Button>
        <Button name="-" onClick={this.changeWeight}>
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          <img src={eyeColorMapper[this.props.eyeColor]} style={{height: this.state.height}} alt="MasterBlasterJrJr" />
        </div>

      </li>
    )
  }
}

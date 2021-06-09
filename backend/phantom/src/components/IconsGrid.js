import React, { Fragment } from 'react';
import {Link} from "react-router-dom"



class IconsGrid extends React.Component {
  constructor(props) {
    super(props)
    this.text = "The effort for a better eSolution • Developing better e-Vote web app"
    this.state = {text:"", index:0}
    //this.state = { color: "#282c34" }//this constructor line to make a different background color for this component
  }


  
  componentDidMount() {
    this.timerID = setInterval( () => {this.animateText()}, 400)
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  animateText = () => {
      if (this.state.index === 67) {
      setTimeout(() => {
	this.setState({index:0})
      },2000)
    }
    this.setState({
      index:this.state.index + 1,
      text:this.text.slice(0,this.state.index)
    })
  }
  render() {
    return (
      <div className="banner">
        <Fragment>
        <div className="name">
    	  <h2>Upcoming features of eVote</h2>
        </div>

        <div className="anime-text">
	  <small>{this.state.text}</small>
	  <i class="fa fa-i-cursor" aria-hidden="true"></i>
	</div>

        <div className="me">
	  <p data-aos='fade-up'>The web app is developed with React.js and ASP.Net Core for the purpose of a Online voting demonstration in the covid-19 season.</p>
        </div>
        <div className="learn-more" data-aos='fade-up'>
  	  <p1>Learn<Link className="a-link" to="/aboutUs">More about us</Link> or <Link className="a-link" to="/contactUs">Contact Us</Link></p1>
        </div>
        </Fragment>
      </div>
    
    )
  }
}

export default IconsGrid
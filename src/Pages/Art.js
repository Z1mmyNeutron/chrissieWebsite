
import gods from "./Media/gods.JPG" 
import angelWing from "./Media/angelWing.JPG" 
import mountains from "./Media/mountains.jpg" 
import sunset from "./Media/sunset.JPG" 
import turtleDuck from "./Media/turtleDuck.PNG" 
import twinFlame from "./Media/twinFlame.JPG" 
import yellowDuck from "./Media/yellowDuck.JPG"

import React from "react"


/*  G takes in 1, 2, or 3 components
props = component count
props will also take a list of integers...
*/
export default class Art extends React.Component{
    constructor(props){
        super(props)
    }
    render(){


        return (
          <div className="Art">
          <header className="Art-header">
          <h1>Art</h1>
            <p>Style</p>
            <p>fashion</p>
            <p>Augmented Reality</p>
            <p>Paintings</p>
            <img src={gods} alt="Gods" />
            <img src={mountains} alt="Mountains" />
            <img src={sunset} alt="Sunset" />
            <img src={turtleDuck} alt="TurtleDuck" />
            <img src={twinFlame} alt="TwinFlame" />
            <img src={yellowDuck} alt="YellowDuck" />
            

            <a
              className="Art-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              
             
            </a>
          </header>
        </div>
        )
    }
}


 
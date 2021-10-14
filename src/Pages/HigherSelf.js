
     
import React from "react"


/*  G takes in 1, 2, or 3 components
props = component count
props will also take a list of integers...
*/
export default class HigherSelf extends React.Component{
    constructor(props){
        super(props)
    }
    render(){


        return (
          <div className="HigherSelf">
          <header className="HigherSelf-header">
              <h1>Higher Self</h1>
              <p>Psychology</p> 
              <p>Philosophy</p>
              <p> Spirituality</p>  
              <p>Palm Reading</p>
              <p>Numerology</p>

            <a
              className="HigherSelf-link"
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


  
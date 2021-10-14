
     
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
    
          </header>
        </div>
        )
    }
}


 
import { Component } from 'react'

export default class CCColors extends Component {

    constructor(props){
        super(props);

        this.state = {divBackgroundColor : "white"};
    }

    ChangeColor = (e) => {
        this.setState({divBackgroundColor : e.target.className});
    }

  render() {

    return (
      <>
      <h3>Ex 1</h3>
      <div style={{backgroundColor: this.state.divBackgroundColor, display: 'grid',padding: '20px', textAlign: 'center', gridTemplateColumns: 'repeat(4, 1fr)', border: "1px solid black", borderRadius : 10}}>
        <button className="red" onClick={this.ChangeColor} style={{color: "red", margin: "5px"}}>Red</button>
        <button className="green" onClick={this.ChangeColor} style={{color: "green", margin: "5px"}}>Green</button>
        <button className="blue" onClick={this.ChangeColor} style={{color: "blue", margin: "5px"}}>Blue</button>
        <button className="yellow" onClick={this.ChangeColor} style={{color: "yellow", margin: "5px"}}>Yellow</button>
        <button className="pink" onClick={this.ChangeColor} style={{color: "pink", margin: "5px"}}>Pink</button>
        <button className="black" onClick={this.ChangeColor} style={{color: "black", margin: "5px"}}>Black</button>
        <button className="orange" onClick={this.ChangeColor} style={{color: "orange", margin: "5px"}}>Orange</button>
        <button className="purple" onClick={this.ChangeColor} style={{color: "purple", margin: "5px"}}>Purple</button>
      </div>
      </>
    )
  }
}

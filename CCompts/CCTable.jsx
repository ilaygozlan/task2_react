import { Component } from 'react'

export default class CCTable extends Component {

    constructor(props) {
        super(props);
        this.state = {dinamicWidth : "100%"}
    }
    
    ChangeWidth = () => {
        this.setState({dinamicWidth : '50%'})
    }

    ChangeWidthD = () => {
        this.setState({dinamicWidth : '100%'})
    }

  render() {
    return (
      <>
      <h3>Ex 3</h3>
      <div style={{border: "1px solid black", borderRadius : 10, padding: 20}}>
            <table style={{border: "1px solid black", width: this.state.dinamicWidth}} onClick={this.ChangeWidth} onDoubleClick={this.ChangeWidthD}>
                <tr style={{border: "1px solid black"}}>
                    <td style={{border: "1px solid black"}}>ilay</td>
                    <td style={{border: "1px solid black"}}>adi</td>
                    <td style={{border: "1px solid black"}}>ofri</td>
                </tr>
                <tr style={{border: "1px solid black"}}>
                    <td style={{border: "1px solid black"}}>ofri</td>
                    <td style={{border: "1px solid black"}}>adi</td>
                    <td style={{border: "1px solid black"}}>ilay</td>
                </tr>
            </table>
      </div>
      </>
    )
  }
}

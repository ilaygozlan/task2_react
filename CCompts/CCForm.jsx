import { Component } from 'react'

export default class CCForm extends Component {
  
  constructor(props){
    super(props);

    this.state = {
        displayNameMessage : "none",
        displayLastNameMessage : "none",
        displayPsychomesticMessage : "none",
        acceptedToStudies : "none",
        notAcceptedToStudies : "none"
    };
  }

  ShowMessage = (e) => {
    this.setState({[e.target.className] : "block"});
  }
  
  HideMessage = (e) => {
    this.setState({[e.target.className] : "none"});
  }

  CheckGrade = (e) => {

    this.grade = Number(e.target.value);

    if(this.grade > 555){
        this.setState({notAcceptedToStudies : "none"});
        this.setState({acceptedToStudies : "block"});
    }
    else{
        this.setState({notAcceptedToStudies : "block"});
        this.setState({acceptedToStudies : "none"});
    }
  }

  render() {
    return (
        <>
            <h3>Ex 2</h3>

            <div style={{border: "1px solid black", borderRadius : 10, padding: 20}}>
                <form>
                    <p style={{ color: "red", margin: "5px 0", display: this.state.displayNameMessage }}>Please enter your first name</p>
                    First Name: <input className='displayNameMessage' type='text' onFocus={this.ShowMessage} onBlur={this.HideMessage}></input><br/>
                    <p style={{ color: "red", margin: "5px 0", display: this.state.displayLastNameMessage}}>Please enter your last name</p>
                    Last Name: <input className='displayLastNameMessage' type='text' onFocus={this.ShowMessage} onBlur={this.HideMessage}></input><br/>
                    <p style={{ color: "red", margin: "5px 0", display: this.state.displayPsychomesticMessage}}>Please enter your psychometric score</p>
                    Psychometric Score: <input className='displayPsychomesticMessage' type='number' onFocus={this.ShowMessage} onBlur={(e) => {this.HideMessage(e); this.CheckGrade(e)}}></input>  
                    <p style={{ color: "green", margin: "5px 0", display: this.state.acceptedToStudies}}>You can be accepted for studies</p>
                    <p style={{ color: "red", margin: "5px 0", display: this.state.notAcceptedToStudies }}>You can not be accepted for studies</p>
                </form>
            </div>
        </>
    )
  }
}

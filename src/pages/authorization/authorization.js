import React from 'react'
import { setEmail, setPassword } from "../../redux/actions/authorization"
import { connect } from "react-redux"

function Authorization(props) {
  return (
    <div className="App">
      <header className="App-header">
        <div> Authorization </div>
        <input 
          value={props.email}
          onChange={(event) => {
            props.setEmail (event.target.value)
          }}></input>
        <input
          value={props.password}
          onChange={(event) => {
            props.setPassword(event.target.value)
        }}></input>
        <button onClick={() => {
          console.log(props.email, props.password)
        }}>Authorization</button>
      </header>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    email: state.authorization.email,
    password: state.authorization.password
  };
}
const mapDispatchToProps ={
  setEmail: setEmail,
  setPassword: setPassword
}
export default connect(mapStateToProps, mapDispatchToProps) (Authorization) 
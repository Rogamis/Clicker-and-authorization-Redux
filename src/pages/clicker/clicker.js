import { connect } from "react-redux"
import  Count  from "../../components/component";
import { setIncriment, setDisckriment, setReset } from "../../redux/actions/clickerAction";


function Clicker(props) {
console.log("Clicker Render")
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Clicker</h1>
          <Count /> 
          <button onClick={() =>{props.setDisckriment()}}> Click -1 </button>
          <button onClick={() =>{props.setIncriment()}}> Click +1 </button>
          <button onClick={() =>{props.setReset()}}>Reset</button>
        </div>
      </header>
    </div>
  );
}


const mapDispatchToProps = {
  setIncriment: setIncriment,
  setDisckriment: setDisckriment,
  setReset: setReset
};
export default connect(null, mapDispatchToProps)(Clicker); 
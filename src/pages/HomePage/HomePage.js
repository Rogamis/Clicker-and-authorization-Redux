import { useNavigate } from "react-router";
import "../../App.css";


const  HomePage = () => {
  const navigateToLogIn = useNavigate();
  const followAuthorization = () => {
    navigateToLogIn("/authorization");
  };
  const navigateToClicker = useNavigate();
  const followClicker = () => {
    navigateToClicker("/clicker")
  }
  const navigateToTask = useNavigate();
  const followTask = () => {
  navigateToTask("/CreateTask");
  }

  return (
    <div className="App">
      <header className="App-header">
        <div> Home element </div>
        <button className="buttonError" onClick={followAuthorization}>Authorization</button>
        <button className="buttonError" onClick={followClicker}>Clicker</button>
        {/* <button className="buttonError" onClick={followTask}>To do list</button> */}
      </header>
    </div>
  );
}

export default HomePage;
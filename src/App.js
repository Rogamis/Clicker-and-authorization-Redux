import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Authorization from "./pages/authorization/authorization";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Clicker from "./pages/clicker/clicker";


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/authorization" element={<Authorization />} />
          <Route path="/Clicker" element={<Clicker />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

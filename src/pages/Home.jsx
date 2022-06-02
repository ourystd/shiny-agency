import { Link } from "react-router-dom";
import logo from "../logo.svg";
import "../styles/App.scss";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="survey">Take a survey</Link>
      </header>
    </div>
  );
}

export default Home;

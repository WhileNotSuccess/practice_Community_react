import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div className="mainsearch"></div>;<div className="Autolayout"></div>
      <div className="search-btn">
        <img
          src="http://localhost:3000/searchicon.png"
          className="search-img"
        ></img>
      </div>
      <div className="banner"></div>
      <div className="board-tag">
        <div className="board-list"></div>
      </div>
      <div className="user-info">
        <div className="user-login"></div>
        <div className="logout-btn"></div>
      </div>
      <div className="post-list"></div>
    </div>
  );
}

export default App;

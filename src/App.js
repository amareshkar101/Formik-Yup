import "./App.css";
import img from "./assests/login.svg";
import Signup from "./components/Singup";

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;

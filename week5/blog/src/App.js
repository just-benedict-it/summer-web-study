import logo from './logo.svg';
import './App.css';
import {FaHamburger} from 'react-icons/fa';
import {useState} from "react";

function App() {
  const [title, titleChange] = useState(["KIM OLIVIA", "SEO SAN", "SOP"]);
  return (
    <>
      <div className="header">
        <div className="headerLeft">
          <a href="http://localhost:3000/">
            <h2>YEROHAE</h2>
          </a>
        </div>
        <div className="headerRight">
          <div>
            <a href="http://localhost:3000/">
              <h3>ABOUT US</h3>
            </a>
          </div>
          <div>
            <a href="http://localhost:3000/">
              <h3>GALLERY</h3>
            </a>
          </div>
        </div>
        {/* <FaHamburger></FaHamburger> */}
      </div>
      <div className="container">
        <div className="containerBox">
          <div>
            <div><h3>{title[0]}</h3></div>
            {/* <div><button onClick={()=>titleChange("OLIVIA KIM", "OLIVIA KIM", "OLIVIA KIM")[0]}>change</button></div> */}
          </div>
          <div>7월 29일 제작</div>
        </div>
        <div className="containerBox">
          <div><h3>{title[1]}</h3></div>
          <div>7월 29일 제작</div>
        </div>
        <div className="containerBox">
            <div><h3>{title[2]}</h3></div>
            <div>7월 29일 제작</div>
        </div>
      </div>
    </>
  );

}

export default App;

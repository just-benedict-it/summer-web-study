import logo from './logo.svg';
import './App.css';
import {FaHamburger} from 'react-icons/fa';
import {useState} from "react";



function App() {
  const [title, titleChange] = useState(["SEO SAN", "SOP", "KIM OLIVIA"]);
  title.sort();
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
      </div>
      <div className="container">
        <div className="containerBox">
          <div className='containerBoxHeader'>
            <div><h3>{title[0]}</h3></div>
            <div><button onClick={()=> {let copyTitle = [...title]; copyTitle[0]="OLIVIA KIM"; titleChange(copyTitle)}}>change</button></div>
          </div>
          <div>7월 29일 제작</div>
        </div>
        <div className="containerBox">
          <div className='containerBoxHeader'>
            <div><h3>{title[1]}</h3></div>
            <div><button onClick={()=> {let copyTitle = [...title]; copyTitle[1]="SAN SEO"; titleChange(copyTitle)}}>change</button></div>
          </div>
          <div>7월 29일 제작</div>
        </div>
        <div className="containerBox">
          <div className='containerBoxHeader'>
            <div><h3>{title[2]}</h3></div>
            <div><button onClick={()=> {let copyTitle = [...title]; copyTitle[2]="POS"; titleChange(copyTitle)}}>change</button></div>
          </div>
          <div>7월 29일 제작</div>
        </div>  
      </div>
    </>
  );
  

}

export default App;

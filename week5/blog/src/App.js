import "./App.css";
import { createElement, useState } from "react";

function Modal({ title, onClick }) {
  const [content, setContent] = useState("");
  const [contents, setContents] = useState([]);

  const onChange = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!content) {
      return;
    }
    setContents((curr) => [...curr, content]);
    setContent("");
  };
  const onXClick = (e) => {
    const li = e.nativeEvent.path[1];
    li.remove();
  };
  return (
    <div className="containerBox">
      <div>
        <div>
          <h3>{title}</h3>
        </div>
        <button onClick={onClick}>change</button>
      </div>
      <div>7월 29일 제작</div>
      <div className="contentBox"></div>
      <form type="submit" onSubmit={onSubmit}>
        <input onChange={onChange} value={content}></input>
        <button>submit</button>
      </form>
      {contents.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={onXClick}> X</button>
        </li>
      ))}
    </div>
  );
}

function App() {
  const [title, setTitle] = useState(["남자 코트", "남자 모자", "남자 가방"]);

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
        {
          <>
            <Modal
              title={title[0]}
              onClick={() => {
                setTitle(["여자 코트", title[1], title[2]]);
              }}
            />
            <Modal
              title={title[1]}
              onClick={() => {
                setTitle([title[0], "여자 모자", title[2]]);
              }}
            />
            <Modal
              title={title[2]}
              onClick={() => {
                setTitle([title[0], title[1], "여자 가방"]);
              }}
            />
          </>
        }
      </div>
    </>
  );
}

export default App;

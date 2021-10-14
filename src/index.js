import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LifeStyle from './Pages/LifeStyle.js';
import Projects from './Pages/Projects.js'
import HigherSelf from './Pages/HigherSelf.js';
import reportWebVitals from './reportWebVitals';
import Art from './Pages/Art.js'



ReactDOM.render(
  <React.StrictMode>
    <App />
    <Art/>
    <LifeStyle/>
    <Projects/>
    <HigherSelf/>
    <script src="Pages/Three/three.js"></script>
    <script src="Pages/Three/index.js"></script>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

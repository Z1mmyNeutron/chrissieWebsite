
import './App.css';
import me from './Pages/Media/homeBackground.jpg'

//Logo, put this right under the header + import the picture you want to use 
//<img src={logo} className="App-logo" alt="logo" />
// if you want actual pictures: <img src={me} alt="Me" />
function App() {
  return (
    <div className="App">
      <header className="App-header">
  
       
        <h1>Christina Rosalie Zimmer</h1>
        <p>
         I do amazing things.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
    
        </a>
      </header>
    </div>
  );
}

export default App;

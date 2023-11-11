import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         I.S.P. HONORIO DELGADO ESPINOZA
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Siles Quispe Claudia Fátima
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Turno: Mañana
        </a>
      </header>
    </div>
  );
}

export default App;

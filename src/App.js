import logo from './logo.svg';
import {Stack, Box, Container} from '@mui/material';
import Clicker from './components/Clicker';
import Store from './components/Store';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clicker/>
        <Store/>
      </header>
    </div>
  );
}

export default App;

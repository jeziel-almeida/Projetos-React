import './App.css';
import Container from './Components/Container';

import FirstComponent from './Components/FirstComponent';
import Hooks from './Components/Hooks';
import Imagens from './Components/Imagens';
import Lista from './Components/Lista';
import RendCondicional from './Components/RendCondicional';

function App() {
  return (
    <div className="App">
      <h2>Hello World</h2>
      <FirstComponent />
      <Imagens />
      <Hooks />
      <Lista />
      <RendCondicional x={22} y={24}/>
      <Container>
        <hr></hr>
        <h4>Tag h4 filha de container</h4>
      </Container>
    </div>
  );
}

export default App;

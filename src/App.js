import './App.css';
import Results from './components/Results'
import Details from './components/Details'
import styled from 'styled-components'

function App() {
  return (
    <div className="App">
      <Main>
        <Results/>
        <Details/>
      </Main>
    </div>
  );
}

const Main = styled.div`
  border: 1px solid gray;
  display: flex;
  width: 70%;
  margin: auto;
`;

export default App;

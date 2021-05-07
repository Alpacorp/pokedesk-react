import './App.css';
import Results from './components/Results'
import Details from './components/Details'
import styled from 'styled-components';

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
  display: flex;
  width: 70%;
  margin: 50px;
  height: auto;
  
  @media (max-width: 850px){
    display: block;
    margin: auto;
  }

  > Details {
    margin: auto;
  }
`;

export default App;

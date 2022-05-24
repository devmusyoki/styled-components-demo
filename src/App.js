import styled from 'styled-components'
import './App.css';


const styledButton = styled.button`
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
`

function App() {
  return (
    <div className="App">
     <button>Button</button>
    </div>
  );
}

export default App;

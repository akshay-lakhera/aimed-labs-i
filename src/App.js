import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login";
import styled from "styled-components";
const PageWrapper = styled.div`
  background-color: #e8e8e8;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <div className="App">
      <PageWrapper>
        <Login />
      </PageWrapper>
    </div>
  );
}

export default App;

import styled from "styled-components";
import AppContent from "./components/AppContent";



interface Props{

}

function App(props: Props) {


  return(
    <>
      <Header>
        jedi wiki
      </Header>
      <AppContent></AppContent>

    </>
  );
}

 
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-transform: uppercase;
  font-size: 25px;
  padding: 10px 0px;
  background-color: #0077ff;
`

export default App;


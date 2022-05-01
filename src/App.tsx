import styled from 'styled-components';
import Header from './components/Header';
import { selectPlanetDetailsShowFlag } from './redux';
import { useAppSelector } from './hooks';
import PlanetDetails from './components/PlanetDetails';
import './App.css';
import PlanetsList from './components/PlanetsList'

interface Props{

}

function App(props: Props) {
  const planetDetailsPageFlag = useAppSelector(selectPlanetDetailsShowFlag);

  return(
    <>
      {planetDetailsPageFlag === false ? 
        <>
          <Header/>
          <PlanetsList/>
        </>
        :
        <>
            <Header/>
            <PlanetDetails></PlanetDetails>
        </>
      }
    </>
  )
}

 


export default App;


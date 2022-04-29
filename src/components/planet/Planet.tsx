import styled from "styled-components";
import { PlanetType } from '../../types/';
import { useAppDispatch } from '../../hooks';
import { useDispatch } from "react-redux";
import { changeRequest } from '../../redux/reducers/planet';

interface Props{
    planetData: PlanetType;
    index: string;
}

function Planet(props:Props){

    const dispatch = useDispatch();

    
    function changePlanetRequest(){
        dispatch(changeRequest({request: `https://swapi.dev/api/planets/${props.index}/`}))
    }


    return(
        <>
            <PlanetWrapper>
                <PlanetCircle onClick={changePlanetRequest}></PlanetCircle>
                <p>{props.index}</p>
                <PlanetName>{props.planetData.name}</PlanetName>
            </PlanetWrapper>
        </>
    )
}

const PlanetCircle = styled.div`
    background-color: #${Math.round((Math.random()*100))}ff;
    width: 100px;
    height: 100px;
    cursor: pointer;
    :hover{
        border-radius: 35%;
        transition: 0.5s;
    
    }
    border-radius: 50%;
`
const PlanetName = styled.p`
    font-size: 20px;
    color: black;
    font-weight: bold;
    text-transform: uppercase;
`

const PlanetWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 50px;
    
    
`


export default Planet;
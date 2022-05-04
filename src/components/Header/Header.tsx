import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from '../../hooks';
import { selectPlanetDetailsShowFlag, changePlanetDetailsFlag, changeCurrentPlanetData, clearPeopleData, selectPlanetId } from '../../redux';



interface Props{

}

function Header(props:Props){

    const planetDetailsFlag = useAppSelector(selectPlanetDetailsShowFlag);
    const dispatch = useAppDispatch();
    const planetId = useAppSelector(selectPlanetId);


    return(
        <>
            <Wrapper>
                
                <Title>
                    StarWars Road map
                    
                </Title>
                {
                    planetDetailsFlag === false ? 
                    null
                        :
                    <GoToSelectPlanetButton onClick={()=>{
                        dispatch(changePlanetDetailsFlag({showPlanetDetailsFlag: false}));
                        dispatch(changeCurrentPlanetData(undefined))
                        dispatch(clearPeopleData(planetId));
                        
                    }}>
                        Go to planets
                    </GoToSelectPlanetButton>
                }
            </Wrapper>
        </>
    )
}



const Wrapper = styled.div`
    background-color: #0969da;
    display: flex;
    margin-bottom: 4%;
    justify-content: space-between;
    align-items: center;


`
const Title = styled.p`
    color: white;
    text-transform: uppercase;
    font-size: 20px;
    padding: 14px 0px;
    margin-left: 5%;
`

const GoToSelectPlanetButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: white;
    color: #0969da;
    margin-right: 2%;
    font-size: 18px;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
    border-radius: 5px;
    padding: 10px 5px;

`


export default Header;
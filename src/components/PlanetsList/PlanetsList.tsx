import styled from "styled-components";
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from "../../hooks";
import { changePlanetsData, selectPlanetsData, changePlanetDetailsFlag, changeCurrentPlanetData, changePeopleData, changePlanetId } from '../../redux';
import { PlanetType } from '../../types';

interface Props{

}



function PlanetsList(props: Props){
    
    const dispatch = useAppDispatch();
    const planetsData = useAppSelector(selectPlanetsData);

    function goToPlanetDetails(planetUrl:string, planetId:string){
        dispatch(changePlanetDetailsFlag({showPlanetDetailsFlag: true}));
        dispatch(changePlanetId({planetId,}))
        fetch(planetUrl)
                .then(response =>{
                    if (response.ok){
                        response.text().then(data =>{
                            dispatch(changeCurrentPlanetData(JSON.parse(data)));
                        })
                    }
                })
    }


    function PlanetsWrapper(){
        return(
            <>
                <Wrapper>
                {
                    planetsData?.map((elem:PlanetType)=>{
                        return (
                            <PlanetCard key={Math.random().toString()} onClick={()=>{goToPlanetDetails(elem.url, (planetsData.indexOf(elem) + 1).toString())}}>
                                <PlanetCircle/>
                                <PlanetName>
                                    {elem.name}
                                </PlanetName>
                            </PlanetCard>
                        )
                    })
                }
                </Wrapper>
            </>
        )
    }

    useEffect(()=>{
        fetch(`https://swapi.dev/api/planets/`)
            .then(response => {
                if (response.ok){
                    response.text().then(data =>{
                           dispatch(changePlanetsData({planetsData: JSON.parse(data).results}))
                    })
                }
            })
    }, [])
    

    return(
       <>
            {
                planetsData === undefined ? 
                <LoadingText>Loading...</LoadingText>
                    :
                <PlanetsWrapper/>
            }
       </> 
    )
}


const LoadingText = styled.p`
    text-align: center;
    font-size: 25px;    
`

const PlanetCard = styled.div`
    padding: 15px 25px;
    
    display: flex;
    flex-direction: column;
    cursor: pointer;
    align-items: center;
    border-radius: 10px;
    :hover{
        margin-top: 15px;
        background-color: #f1f2f3;
        
        transition: 0.5s;
    }
`

const PlanetCircle = styled.div`
    border-radius: 50%;
    height: 70px;
    width: 70px;
    background-color: #7e57c2;
`

const PlanetName = styled.div`
    font-size: 22px;
    padding-top: 15px;
    
`

const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
`



export default PlanetsList;
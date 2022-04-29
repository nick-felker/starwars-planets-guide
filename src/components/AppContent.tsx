import styled from "styled-components";
import Planet from "./planet/Planet";
import { useEffect } from "react";
import { useState } from "react";
import { useAppSelector } from '../hooks';
import {selectPlanetRequest} from '../redux/reducers/planet';
import { PlanetType } from '../types/';



interface Props{

}

function AppContent(props: Props){

    const [planetsData, setPlanetsData] = useState<any[]>();
    const [currentPlanetData, setCurrentPlanetData] = useState<PlanetType>();
    const planetRequest = useAppSelector(selectPlanetRequest);
    useEffect(()=>{
        fetch(`https://swapi.dev/api/planets/`)
            .then(response => {
                if (response.ok){
                    response.text().then(data =>{
                        setPlanetsData(JSON.parse(data).results);    
                    })
                }
            })
    }, [])
        
    useEffect(()=>{
        if(planetRequest === '') return;
        fetch(planetRequest)
            .then(response =>{
                if( response.ok){
                    response.text()
                        .then(data => {
                            
                        })
                }
            })
    }, [planetRequest])
    
    

    if(planetsData === undefined){
        return(
            <>
            <PlanetLoading>Loading, wait.</PlanetLoading>
            </>
        )
    }
    else{
        return(
            <>
                {currentPlanetData === undefined ? null : null
                    
                
                
                
                }
                <PlanetsWrapper>
                    {
                        planetsData.map((elem:any)=>{
                            return <Planet index={(planetsData.indexOf(elem)+1).toString()} key={Math.random().toString()} planetData={elem}></Planet>
                        })
                    }
                </PlanetsWrapper>
            </>
        )
    }
}


const PlanetsWrapper = styled.div`
    margin-top: 5%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

const PlanetLoading = styled.p`
    text-align: center;
    font-size: 24px;
    color: #0077ff;
    text-transform: uppercase;
    font-weight: bold;
`





export default AppContent;


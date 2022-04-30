import {  PlanetType } from '../../types';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { PlanetResidentType } from '../../types';

interface Props{
    planetData: PlanetType;
    setCurrentPlanetDataFunc: (contain: undefined) => void; 
}

function PlanetDetailsPage(props:Props){


    useEffect(()=>{
        
        props.planetData.residents.map((elem:string)=>{
        
            fetch(elem)
                .then(response =>{
                    if(response.ok){
                        response.text().then(data =>{
                            planetResidents.push(JSON.parse(data))
                            
                            
                            
                        })
                    }
                })
                setPlanetResidents(planetResidents);
                
        })
        
        
    }, [props.planetData])

    const [planetResidents, setPlanetResidents] = useState<PlanetResidentType[]>([]);

    return(
        <>
            <PlanetDescrpitionWrapper>
                <PlanetName>
                    Planet name - {props.planetData.name}
                </PlanetName>
                <Population>
                    Planet population - {props.planetData.population}
                </Population>
                <Diameter>
                    Diameter - {props.planetData.diameter}
                </Diameter>
                <Gravity>
                    Gravity - {props.planetData.gravity}
                </Gravity>
                <RotationPeriod>
                    Rotation period - {props.planetData.rotation_period}
                </RotationPeriod>
                <OrbitalPeriodPeriod>
                    Orbital period - {props.planetData.orbital_period}
                </OrbitalPeriodPeriod>
                <Climate>
                    Climate - {props.planetData.climate}
                </Climate>
                <Terrain>
                    Terrain - {props.planetData.terrain}
                </Terrain>
                <SurfaceWater>
                    Surface water - {props.planetData.surface_water}
                </SurfaceWater>
                {

                }
            </PlanetDescrpitionWrapper>
        
        </>
    )
}


const PlanetDescrpitionWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const PlanetName = styled.p`
    font-size: 25px;
    font-weight: bold;
    text-transform: uppercase;
`

const Population = styled.p`
    font-weight: bold;
    font-size: 20px;
`

const Resident = styled.p`
    font-weight: bold;
    font-size: 20px;
`

const RotationPeriod = styled.p`
    font-weight: bold;
    font-size: 20px;
`

const OrbitalPeriodPeriod = styled.p`
    font-weight: bold;
    font-size: 20px;
`
const Diameter = styled.p`
    font-weight: bold;
    font-size: 20px;
`

const Climate = styled.p`
    font-weight: bold;
    font-size: 20px;
`
const Gravity = styled.p`
    font-weight: bold;
    font-size: 20px;
`

const Terrain = styled.p`
    font-weight: bold;
    font-size: 20px;
`

const SurfaceWater = styled.p`
    font-weight: bold;
    font-size: 20px;
`

const CurrentResident = styled.p`
    font-weight: bold;
    font-size: 20px;
    background-color: gray;
`




export default PlanetDetailsPage;
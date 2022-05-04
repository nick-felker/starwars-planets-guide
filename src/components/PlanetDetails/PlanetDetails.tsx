import styled from "styled-components";
import { useAppSelector, useAppDispatch } from '../../hooks';
import {    selectCurrentPlanetData, 
            changePeopleData, 
            changeSexDisplayFlag, 
            selectPeopleDataArr, 
            selectMenDisplayFlag, 
            selectWomenDisplayFlag, 
            selectPlanetId 
        } from '../../redux';
import { useState, useEffect } from 'react';
import { PeopleArrTypeData, PeopleType } from '../../types';


interface Props{
    
}


function PlanetDetails(props: Props){
    
    const currentPlanetData = useAppSelector(selectCurrentPlanetData);
    const dispatch = useAppDispatch();
    const womenDisplayFlag = useAppSelector(selectWomenDisplayFlag);
    const menDisplayFlag = useAppSelector(selectMenDisplayFlag);
    const planetId = useAppSelector(selectPlanetId);
    const peopleDataArr = useAppSelector(selectPeopleDataArr);
    
    useEffect(()=>{
        if (currentPlanetData === undefined) return;
        currentPlanetData.residents.map((elem:string)=>{
            fetch(elem)
                .then(response => {
                    if(response.ok){
                        response.text().then(data =>{
                            dispatch(changePeopleData({peopleData: JSON.parse(data), planetId,}));
                        })
                    }
                })
        })
    }, [currentPlanetData])
    
    
    interface PeopleDetailsInfoProps{
        elem: PeopleArrTypeData;
    }

    function PeopleDetailsInfo(props:PeopleDetailsInfoProps){
        return(
            <PeopleDetailsCard>
                <p>Name - {props.elem.peopleData.name}</p>
                    <p>Birth year - {props.elem.peopleData.birth_year}</p>
                    <p>Gender - {props.elem.peopleData.gender}</p>
                    <p>Height - {props.elem.peopleData.height}</p>
                    <p>Skin color - {props.elem.peopleData.skin_color}</p>
                    <p>Hair color - {props.elem.peopleData.hair_color}</p>
                    <p>Mass - {props.elem.peopleData.mass}</p>
            </PeopleDetailsCard>
        )
    }

    interface PlanetWrapperProps{

    }

    function PlanetWrapper(props:PlanetWrapperProps){
    
        return(
            <>
                <ExternalPlanetDetailsWrapper>
                    <Wrapper>
                        <Card>
                            <CardTitle>
                                Planet name
                            </CardTitle>
                            <CardSubTitle>
                                {currentPlanetData?.name}
                            </CardSubTitle>
                        </Card>
                        <Card>
                            <CardTitle>
                                Population
                            </CardTitle>
                            <CardSubTitle>
                                {currentPlanetData?.population}
                            </CardSubTitle>
                        </Card>
                        <Card>
                            <CardTitle>
                                Rotation period
                            </CardTitle>
                            <CardSubTitle>
                                {currentPlanetData?.rotation_period}
                            </CardSubTitle>
                        </Card>
                        <Card>
                            <CardTitle>
                                Orbital period
                            </CardTitle>
                            <CardSubTitle>
                                {currentPlanetData?.orbital_period}
                            </CardSubTitle>
                        </Card>
                        <Card>
                            <CardTitle>
                                Diameter
                            </CardTitle>
                            <CardSubTitle>
                                {currentPlanetData?.diameter}
                            </CardSubTitle>
                        </Card>
                        <Card>
                            <CardTitle>
                                Climater
                            </CardTitle>
                            <CardSubTitle>
                                {currentPlanetData?.climate}
                            </CardSubTitle>
                        </Card>
                        <Card>
                            <CardTitle>
                                Gravity
                            </CardTitle>
                            <CardSubTitle>
                                {currentPlanetData?.gravity}
                            </CardSubTitle>
                        </Card>
                        <Card>
                            <CardTitle>
                                Terrain
                            </CardTitle>
                            <CardSubTitle>
                                {currentPlanetData?.terrain}
                            </CardSubTitle>
                        </Card>
                        <Card>
                            <CardTitle>
                                Surface water
                            </CardTitle>
                            <CardSubTitle>
                                {currentPlanetData?.surface_water}
                            </CardSubTitle>
                        </Card>
                        <Card>
                            <CardTitle>
                                Residents - {currentPlanetData?.residents.length}
                            </CardTitle>
                            <FilterButtonsRow>
                                <SexFilterButton onClick={()=>dispatch(changeSexDisplayFlag({menDisplayFlag: !menDisplayFlag}))}>
                                    Filter men
                                    <h6>{menDisplayFlag + ''}</h6>
                                </SexFilterButton>
                                <SexFilterButton onClick={()=>dispatch(changeSexDisplayFlag({womenDisplayFlag: !womenDisplayFlag}))}>
                                    Filter women
                                    <h6>{womenDisplayFlag + ''}</h6>
                                </SexFilterButton>
                            </FilterButtonsRow>
                                {peopleDataArr.length !== currentPlanetData?.residents.length ? <p>loading</p> : null}
                            <CardSubTitle>
                               {   
                                    peopleDataArr.map((elem:PeopleArrTypeData)=>{

                                        if(elem.peopleData.gender === 'female' && womenDisplayFlag === true){
                                            return <PeopleDetailsInfo elem={elem}/>
                                    }
                                        if(elem.peopleData.gender === 'male' && menDisplayFlag === true){
                                           return <PeopleDetailsInfo elem={elem}/>
                                        }
                                        if(elem.peopleData.gender === 'n/a'){
                                           return <PeopleDetailsInfo elem={elem}/>
                                        }
                                    })
                               }
                            </CardSubTitle>
                        </Card>
                    </Wrapper>
                </ExternalPlanetDetailsWrapper>
            </>
        )
    }
    


    return(
        <>
            {currentPlanetData === undefined ? 
                <LoadingText>
                    Loading...
                </LoadingText>
                :
                <PlanetWrapper/>
            }
        </>
    )
}


const LoadingText = styled.p`
    text-align: center;
    font-size: 25px;  
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    
    
`

const PeopleDetailsCard = styled.div`
    display: flex;
    flex-direction: column;
    
    text-align: left;
    background-color: #f6f6f6;
    border-radius: 5px;
    margin-bottom: 40px;
`

const ExternalPlanetDetailsWrapper = styled.div`
    max-width: 60%;
    margin: 0 auto;
    padding-bottom: 2%;
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;

`

const CardTitle = styled.p`
    font-size: 20px;
    text-transform: uppercase;
    color: #2585f5;
    font-weight: 700;
    padding-bottom: 16px;
    text-align: center
    
`

const CardSubTitle = styled.p`
    font-size: 18px;
    text-align: center;
    font-weight: 500;
    
`

const SexFilterButton = styled.button`
    padding: 10px 15px;
    border: none;
    :nth-child(even){
        margin-left: 15px;
    }
    font-size: 18px;
    margin-bottom: 25px;
    cursor: pointer;
    :hover{ 
        opacity: 0.5;
        transition: 0.5s;
    }
    border-radius: 5px;
`

const FilterButtonsRow = styled.div`
    display: flex;
    align-items: center;
`

export default PlanetDetails;
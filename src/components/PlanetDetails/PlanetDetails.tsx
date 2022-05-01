import styled from "styled-components";
import { useAppSelector, useAppDispatch } from '../../hooks';
import { selectCurrentPlanetData, changePeopleData, selectPeopleDataByPlanetId, selectPeopleDataArr, selectMenDisplayFlag, selectWomenDisplayFlag, selectPlanetId } from '../../redux';
import { useState, useEffect } from 'react';
import { PeopleArrTypeData, PeopleType } from '../../types';


interface Props{
    
}


function PlanetDetails(props: Props){
    
    const currentPlanetData = useAppSelector(selectCurrentPlanetData);
    const dispatch = useAppDispatch();
    const womenDisplayFlag = useAppSelector(selectWomenDisplayFlag);
    const menDipsplayFlag = useAppSelector(selectMenDisplayFlag);
    const [peopleData, setPeopleData] = useState<string[]>([]);
    const planetId = useAppSelector(selectPlanetId);
    const peopleDataArr = useAppSelector(selectPeopleDataArr);

    
    
    


    
    function PlanetWrapper(){
    
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
                                Residents
                            </CardTitle>
                            <FilterButtonsRow>
                                <SexFilterButton>
                                    Filter men
                                </SexFilterButton>
                                <SexFilterButton>
                                    Filter women
                                </SexFilterButton>
                            </FilterButtonsRow>
                            <CardSubTitle>
                               {
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

const ExternalPlanetDetailsWrapper = styled.div`
    max-width: 60%;
    margin: 0 auto;
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
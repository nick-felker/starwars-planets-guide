import styled from "styled-components";



function Header(){
    return(
        <>
            <Wrapper>
                <Title>
                    Solar Wars Road map
                </Title>
            </Wrapper>
        </>
    )
}



const Wrapper = styled.div`
    background-color: #0969da;
    display: flex;
    justify-content: space-between;
    align-items: center;


`
const Title = styled.p`
    color: white;
    text-transform: uppercase;
    font-size: 20px;
    padding: 7px 0px;
    margin-left: 5%;
`

const GoToSelectPlanetButton = styled.button`
    cursor: pointer;
`


export default Header;
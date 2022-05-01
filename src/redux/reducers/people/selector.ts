import { PeopleType, PeopleArrTypeData } from "../../../types";
import { RootState } from "../../store";

export const selectWomenDisplayFlag = (state: RootState) => {
    return(
        state.app.people.womenDisplayFlag
    )
};

export const selectMenDisplayFlag = (state: RootState) => {
    return(
        state.app.people.menDisplayFlag
    )
};

export const selectPeopleDataByPlanetId = (state: RootState, planetId:string) => {
    state.app.people.peopleDataArr.filter((elem:PeopleArrTypeData)=> elem.planetId === planetId)
}

export const selectPeopleDataArr = (state: RootState) => {
    return(
        state.app.people.peopleDataArr
    )
}
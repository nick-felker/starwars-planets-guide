import { RootState } from "../../store";

export const selectPlanetRequest = (state: RootState) => {
    return(
        state.app.planet.detailPlanetRequest
    )
};

export const selectPlanetsData = (state: RootState) =>{
    return(
        state.app.planet.planetsData
    )
};

export const selectPlanetDetailsShowFlag = (state: RootState) =>{
    return(
        state.app.planet.showPlanetDetailsFlag
    )
};
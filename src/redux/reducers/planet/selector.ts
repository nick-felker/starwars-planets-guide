import { RootState } from "../../store";

export const selectPlanetRequest = (state: RootState) => {
    return(
        state.app.planet.showPlanetDetailsFlag
    )
};

export const selectPlanetsData = (state: RootState) => {
    return(
        state.app.planet.planetsData
    )
};

export const selectPlanetDetailsShowFlag = (state: RootState) => {
    return(
        state.app.planet.showPlanetDetailsFlag
    )
};

export const selectCurrentPlanetData = (state: RootState) => {
    return(
        state.app.planet.currentPlanetData
    )
}

export const selectPlanetId = (state: RootState) => { 
    return(
        state.app.planet.planetId
    )
}
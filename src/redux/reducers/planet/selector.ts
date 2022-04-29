import { RootState } from "../../store";

export const selectPlanetRequest = (state: RootState) =>{
    return state.app.planet.request
}
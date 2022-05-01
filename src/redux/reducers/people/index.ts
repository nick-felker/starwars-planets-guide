import peopleReducer  from "./reducer";
export default peopleReducer;
export { changeSexDisplayFlag, changePeopleData, clearPeopleData} from './reducer';
export { selectWomenDisplayFlag, selectMenDisplayFlag, selectPeopleDataByPlanetId, selectPeopleDataArr } from './selector';
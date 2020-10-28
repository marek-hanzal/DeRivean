import {kingdomBranch} from "redux/kingdom/selector";

const branch = state => kingdomBranch(state).attributes;


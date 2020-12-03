import {LOGIN, LOGIN_TOKEN, LOGOUT, SET_TABLE, SHOW_ERROR} from "../actions/app";
import {Toaster} from "@blueprintjs/core";
import {AppToaster} from "../../components/app/toaster";

const initialState = {
    username: "",
    token: "",
    table: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem("token", action.token);
            return {...state, username: action.username, token: action.token};
            case LOGIN_TOKEN:
            return {...state,  token: action.token};
        case LOGOUT:
            localStorage.setItem("token", null);
            return {...state, username: "", token: ""};
        case SET_TABLE:
            return {...state, table: action.table};
        case SHOW_ERROR:
            AppToaster.show({message: action.message, intent: "danger"});
            return state;
        default:
            return state;
    }
}
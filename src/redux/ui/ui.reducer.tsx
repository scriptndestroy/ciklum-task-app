import { Actions, ActionTypes } from "./ui.action";

export interface UIState {   
    showLoading: boolean;    
}

const initialState = {    
    showLoading: false, 
}

export const uiReducer = (state: UIState = initialState, action: Actions) => {
    switch (action.type) {      
        case ActionTypes.LOADING:
            return {
                ...state,
                showLoading: true,
            };
        case ActionTypes.LOADING_CLEAR:
            return {
                ...state,
                showLoading: false,
            };      
        default:
            return state;
    }
};

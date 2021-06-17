
export enum ActionTypes { 
  LOADING = "LOADING",
  LOADING_CLEAR = "LOADING_CLEAR",
}

interface LoadingAction {
  type: ActionTypes.LOADING;
}
interface LoadingClearAction {
  type: ActionTypes.LOADING_CLEAR;
}


export type Actions = LoadingAction | LoadingClearAction;

const loading = () => {
  return { type: ActionTypes.LOADING, payload: "" };
};

const loadingClear = () => {
  return { type: ActionTypes.LOADING_CLEAR, payload: "" };
};


export const UIActions = { 
  loading,
  loadingClear 
};

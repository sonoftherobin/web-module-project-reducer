export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const SAVE_MEMORY = "SAVE-MEMORY";
export const APPLY_MEMORY = "APPLY_MEMORY";
export const CLEAR_MEMORY = "CLEAR-MEMORY";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}
export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator});
}

export const clearDisplay = (number) => {
    return({type:CLEAR_DISPLAY, payload:number});
}

export const saveMemory = (display) => {
    return({type:SAVE_MEMORY, payload:display});

}

export const applyMemory = (total) => {
    return({type:APPLY_MEMORY, payload:total});
}

export const clearMemory = (number) => {
    return({type:CLEAR_MEMORY, payload:number});
}

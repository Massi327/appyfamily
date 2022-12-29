export const ADD_BOOKNG = 'addBooking'
export const SELECTED= 'selected'

export function addBooking(sala, dataStart, dataEnd, nome, scopo){
    return {type:ADD_BOOKNG, sala, dataStart, dataEnd, nome, scopo}
}

export function selected(id, rid){
    return {type: SELECTED, id, rid}
}
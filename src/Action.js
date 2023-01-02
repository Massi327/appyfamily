export const ADD_BOOKNG = 'addBooking'
export const SELECTED= 'selected'

export function addBooking(sala, dataStart, dataEnd, address, titolo, about){
    return {type:ADD_BOOKNG, sala, dataStart, dataEnd, address, titolo, about}
}

export function selected(id, rid){
    return {type: SELECTED, id, rid}
}
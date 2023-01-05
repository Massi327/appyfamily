export const ADD_BOOKNG = 'addBooking'
export const SELECTED= 'selected'

export const SELECTEDSLOT= 'selectedSlot'

export function addBooking(sala, dataStart, dataEnd, address, titolo, about, categoria){
    return {type:ADD_BOOKNG, sala, dataStart, dataEnd, address, titolo, about, categoria}
}

export function selected(id, rid){
    return {type: SELECTED, id, rid}
}

export function selectedSlot(giorno, start, c){
    return {type: SELECTEDSLOT, giorno, start, c}
}
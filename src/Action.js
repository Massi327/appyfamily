export const ADD_BOOKNG = 'addBooking'
export const SELECTED= 'selected'
export const SELECTEDSLOT= 'selectedSlot'
export const ADD_CATEGORY = 'addCategory'

export function addBooking( dataStart, dataEnd, address, titolo, about, categoria){
    return {type:ADD_BOOKNG, dataStart, dataEnd, address, titolo, about, categoria}
}

export function selected(id, rid){
    return {type: SELECTED, id, rid}
}

export function selectedSlot(giorno, start, c){
    return {type: SELECTEDSLOT, giorno, start, c}
}

export function addCategory(category){
    return {type: ADD_CATEGORY, category}
}
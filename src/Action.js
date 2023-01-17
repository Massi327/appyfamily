export const ADD_BOOKNG = 'addBooking'
export const SELECTED= 'selected'
export const SELECTEDSLOT= 'selectedSlot'
export const ADD_CATEGORY = 'addCategory'
export const ADD_FORUM = 'addForum'
export const CANCEL_BOOKNG = 'cancelBooking'
export const EDIT_BOOKNG = 'editBooking'

export function addBooking(dataStart, dataEnd, address, titolo, about, categoria){
    return {type:ADD_BOOKNG, dataStart, dataEnd, address, titolo, about, categoria}
}

export function selected(id){
    return {type: SELECTED, id}
}

export function selectedSlot(giorno, start, end, c){
    return {type: SELECTEDSLOT, giorno, start, end, c}
}

export function addCategory(category){
    return {type: ADD_CATEGORY, category}
}

export function addForum(titolof, aboutf){
    return {type:ADD_FORUM, titolof, aboutf}
}

export function cancelBooking(id){
    return {type:CANCEL_BOOKNG, id}
}

export function editBooking(dataStart, dataEnd, address, titolo, about, categoria){
    return {type:EDIT_BOOKNG, dataStart, dataEnd, address, titolo, about, categoria}
}
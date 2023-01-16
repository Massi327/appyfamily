export const ADD_BOOKNG = 'addBooking'
export const SELECTED= 'selected'
export const SELECTEDSLOT= 'selectedSlot'
export const ADD_CATEGORY = 'addCategory'
export const ADD_FORUM = 'addForum'

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
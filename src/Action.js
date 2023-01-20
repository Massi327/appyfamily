export const ADD_BOOKNG = 'addBooking'
export const SELECTED= 'selected'
export const SELECTEDSLOT= 'selectedSlot'
export const ADD_CATEGORY = 'addCategory'
export const ADD_FORUM = 'addForum'
export const CANCEL_BOOKNG = 'cancelBooking'
export const EDIT_BOOKNG = 'editBooking'
export const PARTECIPO = 'Partecipo'
export const NON_PARTECIPO = 'nonPartecipo'

export function addBooking(dataStart, dataEnd, address, titolo, about, categoria, property){
    return {type:ADD_BOOKNG, dataStart, dataEnd, address, titolo, about, categoria, property}
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

export function addForum(titolof){
    return {type:ADD_FORUM, titolof}
}

export function cancelBooking(id){
    return {type:CANCEL_BOOKNG, id}
}

export function editBooking(dataStart, dataEnd, address, titolo, about, categoria, property){
    return {type:EDIT_BOOKNG, dataStart, dataEnd, address, titolo, about, categoria, property}
}

export function partecipo(key, dataStart, dataEnd, address, titolo, about, categoria, property, host, img){
    return {type:PARTECIPO, key, dataStart, dataEnd, address, titolo, about, categoria, property, host, img}
}

export function nonPartecipo(id){
    return {type:NON_PARTECIPO, id}
}
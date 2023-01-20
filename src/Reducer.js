import {
    ADD_BOOKNG,
    ADD_CATEGORY,
    ADD_FORUM,
    CANCEL_BOOKNG,
    EDIT_BOOKNG, NON_PARTECIPO,
    PARTECIPO,
    SELECTED,
    SELECTEDSLOT
} from "./Action";
import moment from 'moment'
import 'moment/locale/it';

export const initialState = {
    prenotazioni:[
        {   key: 789,
            titolo:'Park Hamill',
            dataStart:moment('2023-01-03, 10:00','YYYY-MM-DD, hh:mm'),
            dataEnd:moment('2023-01-03, 11:30','YYYY-MM-DD, hh:mm'),
            address:'Via giordani 78',
            about:'Gita al parco',
            categoria: 'Other',
            property: 'public'
        },
        {
            key:788,
            titolo:'Sportone',
            dataStart:moment('2023-01-04, 20:00','YYYY-MM-DD, hh:mm'),
            dataEnd:moment('2023-01-04, 21:30','YYYY-MM-DD, hh:mm'),
            address:'112 Barrack Street, NR3 1TX, UK',
            about:'Sport al parco',
            categoria: 'Sport',
            property: 'private'
        },
    ],

    forums:[
        {
            key: 100,
            titolo: 'Activity ideas for my 6 months old child during long car trips?',
            about: '4 weeks ago • Mia Johnson'
        },

        {
            key: 101,
            titolo: 'My baby will not sleep, what should I do?',
            about: '5 weeks ago • Chandler Santoro'
        },
    ],

    id:0,
    giorno: moment('').format('yyyy-MM-DD'),
    start: moment('','yyyy-MM-DD').format('LT'),
    end: moment('','yyyy-MM-DD').format('LT'),
    c: 'false',
    categoriav: ['---', 'Sport', 'Party', 'Music', 'Other'],

    arrayLS:[
        {   ids: 789,
            title:'Park Hamill',
            start: moment('2023-01-03, 10:00','YYYY-MM-DD, hh:mm'),
            end: moment('2023-01-03, 11:30','YYYY-MM-DD, hh:mm'),
            categoria: 'Park'
        },
        {   ids: 788,
            title:'Mario Draghi',
            start: moment('2023-01-04, 10:00','YYYY-MM-DD, hh:mm'),
            end: moment('2023-01-04, 11:30','YYYY-MM-DD, hh:mm'),
            categoria: 'Sport'
        },],

    palestra: [
        {   key: 900,
            titolo:'Dance Lesson',
            dataStart:moment('2023-01-23, 19:00','YYYY-MM-DD, hh:mm'),
            dataEnd:moment('2023-01-23, 20:00','YYYY-MM-DD, hh:mm'),
            address:'112 Barrack Street, NR3 1TX, UK',
            about:'Ballo di gruppo',
            categoria: 'Palestra'
        },
        {
            key:901,
            titolo:'Dance Lesson',
            dataStart:moment('2023-01-30, 19:00','YYYY-MM-DD, hh:mm'),
            dataEnd:moment('2023-01-30, 20:00','YYYY-MM-DD, hh:mm'),
            address:'112 Barrack Street, NR3 1TX, UK',
            about:'Ballo di gruppo',
            categoria: 'Palestra'
        },

    ],

    partecipazioni: []
}

export function Reducer(state,action){
    switch (action.type){
        case ADD_BOOKNG:

            let evento = { key: Math.random(), address: action.address, dataStart: action.dataStart, dataEnd: action.dataEnd, titolo: action.titolo, about: action.about, categoria: action.categoria, property: action.property}
            let eventoLS = { ids: evento.key, title: action.titolo, start: action.dataStart, end: action.dataEnd, categoria: action.categoria}
            let newArrayLS = [...state.arrayLS]
            let newArray = [...state.prenotazioni]

            let eventi = JSON.parse(localStorage.getItem('arrayLS'))
            let preno = JSON.parse(localStorage.getItem('prenotazioni'))

            if(eventi == null) {
                if (state.arrayLS.length<3){
                    newArrayLS = [...state.arrayLS, eventoLS]
                }
            }else {newArrayLS = [...eventi, eventoLS]}

            if(preno == null){
                if (state.prenotazioni.length<3 ){
                    newArray = [...state.prenotazioni, evento]
                }
            }else{newArray = [...preno, evento]}


            return{
                ...state,
                prenotazioni: newArray,
                arrayLS: newArrayLS
            }

        case SELECTED:
            return {
                ...state,
                id: action.id,
            }

        case SELECTEDSLOT:

            return {
                ...state,
                giorno: action.giorno,
                start: action.start,
                end: action.end,
                c: action.c
            }

        case ADD_FORUM:

            let post = {key: Math.random(), titolo: action.titolof, about: 'Now • Mia Johnson'}
            let newForum = [...state.forums]

            let forum = JSON.parse(localStorage.getItem('forums'))

            if(forum == null){
                if (state.forums.length<2){
                    newForum = [...state.forums, post]
                }
            }else{newForum = [...forum, post]}


            return{
                ...state,
                forums: newForum,
            }

        case CANCEL_BOOKNG:

            let prenota = JSON.parse(localStorage.getItem('prenotazioni'))
            let arrayp = [...state.prenotazioni]
            let arrayC

            if(prenota == null){
                if (state.prenotazioni.length<3 ){
                    arrayC = arrayp.filter(f => f.key !== action.id)
                }
            }else{arrayC = prenota.filter(f => f.key !== action.id)}

            return {
                ...state,
                prenotazioni: arrayC
            }

        case EDIT_BOOKNG:

            let eventoedit = { key: Math.random(), address: action.address, dataStart: action.dataStart, dataEnd: action.dataEnd, titolo: action.titolo, about: action.about, categoria: action.categoria, property: action.property}

            let arrayprova = [...state.prenotazioni]

            arrayprova = [...arrayprova, eventoedit]

            return {
                ...state,
                prenotazioni: arrayprova
            }

        case PARTECIPO:

            let eventoPartecipo = { key: action.key, address: action.address, dataStart: action.dataStart, dataEnd: action.dataEnd, titolo: action.titolo, about: action.about, categoria: action.categoria, property: action.property, host: action.host, img: action.img}


            let newPartecipazioni = [...state.partecipazioni]


            let cardh = JSON.parse(localStorage.getItem('partecipazioni'))


            if(cardh == null){
                if (state.partecipazioni.length<2 ){
                    newPartecipazioni = [...state.partecipazioni, eventoPartecipo]
                }
            }else{newPartecipazioni = [...cardh, eventoPartecipo]}


            return{
                ...state,
                partecipazioni: newPartecipazioni,
            }

        case NON_PARTECIPO:

            let parteci = JSON.parse(localStorage.getItem('partecipazioni'))
            let arraypart = [...state.partecipazioni]
            let arrayPP

            if(parteci == null){
                if (state.prenotazioni.length<2 ){
                    arrayPP = arraypart.filter(f => f.key !== action.id)
                }
            }else{arrayPP = parteci.filter(f => f.key !== action.id)}

            return {
                ...state,
                partecipazioni: arrayPP
            }

        default:
            return state
    }
}
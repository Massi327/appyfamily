import {ADD_BOOKNG, ADD_CATEGORY, ADD_FORUM, CANCEL_BOOKNG, EDIT_BOOKNG, SELECTED, SELECTEDSLOT} from "./Action";
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
            categoria: 'Park'
        },
        {
            key:788,
            titolo:'Sportone',
            dataStart:moment('2023-01-04, 20:00','YYYY-MM-DD, hh:mm'),
            dataEnd:moment('2023-01-04, 21:30','YYYY-MM-DD, hh:mm'),
            address:'112 Barrack Street, NR3 1TX, UK',
            about:'Sport al parco',
            categoria: 'Sport'
        },
    ],

    forums:[
        {
            key: 100,
            titolo: 'prova',
            about: 'prova'
        },
    ],

    id:0,
    giorno: moment('').format('yyyy-MM-DD'),
    start: moment('','yyyy-MM-DD').format('LT'),
    end: moment('','yyyy-MM-DD').format('LT'),
    c: 'false',
    categoriav: ['---', 'Sport', 'Park'],

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

    ]
}

export function Reducer(state,action){
    switch (action.type){
        case ADD_BOOKNG:

            let evento = { key: Math.random(), address: action.address, dataStart: action.dataStart, dataEnd: action.dataEnd, titolo: action.titolo, about: action.about, categoria: action.categoria}
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

            let post = {key: Math.random(), titolo: action.titolof, about: action.aboutf}
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

            let arrayp = [...state.prenotazioni]
            let arrayC= arrayp.filter(f => f.key !== action.id)

            return {
                ...state,
                prenotazioni: arrayC
            }

        case EDIT_BOOKNG:

            let eventoedit = { key: Math.random(), address: action.address, dataStart: action.dataStart, dataEnd: action.dataEnd, titolo: action.titolo, about: action.about, categoria: action.categoria}

            let arrayprova = [...state.prenotazioni]
            let arrayCancellato= arrayprova.filter(f => f.key !== action.id)

            let prenotazioninuove = JSON.parse(localStorage.getItem('prenotazioni'))

            

            return {
                ...state,
                prenotazioni: arrayCancellato
            }

        default:
            return state
    }
}
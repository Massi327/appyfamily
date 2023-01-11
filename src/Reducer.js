import {ADD_BOOKNG, ADD_CATEGORY, SELECTED, SELECTEDSLOT} from "./Action";
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
                }, {   key:Math.random(),
                    titolo:'Mario Draghi',
                    dataStart:moment('2023-01-04, 10:00','YYYY-MM-DD, hh:mm'),
                    dataEnd:moment('2023-01-04, 11:30','YYYY-MM-DD, hh:mm'),
                    address:'Come mangiare bene'},
    ],
    id:0,
    rid:0,
    giorno: moment('').format('yyyy-MM-DD'),
    start: moment('','yyyy-MM-DD').format('LT'),
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
        },]
}

export function Reducer(state,action){
    switch (action.type){
        case ADD_BOOKNG:

            let evento = { key: Math.random(), address: action.address, dataStart: action.dataStart, dataEnd: action.dataEnd, titolo: action.titolo, about: action.about, categoria: action.categoria}
            let eventoLS = { ids: evento.key, title: action.titolo, start: action.dataStart, end: action.dataEnd, categoria: action.categoria}
            let newArrayLS = [...state.arrayLS]


            let eventi = JSON.parse(localStorage.getItem('arrayLS'))
            if(state.arrayLS.length<3 && eventi.length<3){
                newArrayLS = [...state.arrayLS, eventoLS]
            }else {newArrayLS = [...eventi, eventoLS]}

            let newArray = [...state.prenotazioni, evento]

            return{
                ...state,
                prenotazioni: newArray,
                arrayLS: newArrayLS
            }

        case SELECTED:
            return {
                ...state,
                id: action.id,
                rid: action.rid
            }

        case SELECTEDSLOT:

            return {
                ...state,
                giorno: action.giorno,
                start: action.start,
                c: action.c
            }


        default:
            return state
    }
}
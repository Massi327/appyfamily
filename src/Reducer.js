import {ADD_BOOKNG, SELECTED} from "./Action";
import moment from 'moment'
import 'moment/locale/it';

export const initialState = {
    sale: [
        {id:1,  prenotazioni:[
                {   key:Math.random(),
                    titolo:'Park Hamill',
                    dataStart:moment('2023-01-03, 10:00','YYYY-MM-DD, hh:mm'),
                    dataEnd:moment('2023-01-03, 11:30','YYYY-MM-DD, hh:mm'),
                    address:'Via giordani 78',
                    about:'Gita al parco',
                    prova: 'Park'
                }]},
        {id:1, prenotazioni:[]},
        {id:1, prenotazioni:[
                {   key:Math.random(),
                    titolo:'Mario Draghi',
                    dataStart:moment('2023-01-04, 10:00','YYYY-MM-DD, hh:mm'),
                    dataEnd:moment('2023-01-04, 11:30','YYYY-MM-DD, hh:mm'),
                    address:'Come mangiare bene'}]},
    ],
    id:0,
    rid:0,
    categoria: []
}

export function Reducer(state,action){
    switch (action.type){
        case ADD_BOOKNG:

            const sIndex = state.sale.findIndex(s=>s.id===action.sala)
            let newArray = [...state.sale]
            newArray[sIndex] = {...newArray[sIndex],
                prenotazioni:[...newArray[sIndex].prenotazioni,
                    {   key: Math.random(),
                        address:action.address,
                        dataStart:action.dataStart,
                        dataEnd:action.dataEnd,
                        titolo:action.titolo,
                        about: action.about,
                        prova: action.prova
                    }
                ]}

            return{
                ...state,
                sale: newArray
            }

        case SELECTED:
            return {
                ...state,
                id:action.id,
                rid: action.rid
            }


        default:
            return state
    }
}
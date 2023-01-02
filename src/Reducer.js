import {ADD_BOOKNG, SELECTED} from "./Action";
import moment from 'moment'
import 'moment/locale/it';

export const initialState = {
    sale: [
        {id:1,  prenotazioni:[
                {   key:Math.random(),
                    titolo:'Giovanni',
                    dataStart:moment('2023-01-03, 10:00','YYYY-MM-DD, hh:mm'),
                    dataEnd:moment('2023-01-03, 11:30','YYYY-MM-DD, hh:mm'),
                    address:'Via giordani 78',
                    about:'Gita al parco'}]},
        {id:2, prenotazioni:[]},
        {id:3, prenotazioni:[
                {   key:Math.random(),
                    titolo:'Mario',
                    dataStart:moment('2023-01-04, 10:00','YYYY-MM-DD, hh:mm'),
                    dataEnd:moment('2023-01-04, 11:30','YYYY-MM-DD, hh:mm'),
                    address:'Come mangiare bene'}]},
        {id:4, prenotazioni:[]},
        {id:5, prenotazioni:[]},
    ],
    id:0,
    rid:0
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
                        about: action.about
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
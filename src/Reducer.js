import {ADD_BOOKNG, SELECTED} from "./Action";
import moment from 'moment'
import 'moment/locale/it';

export const initialState = {
    sale: [
        {id:1, prenotazioni:[]},
        {id:2, prenotazioni:[
                {   key:Math.random(),
                    nome:'Giovanni',
                    dataStart:moment('2022-02-14, 10:00','YYYY-MM-DD, hh:mm'),
                    dataEnd:moment('2022-02-14, 11:30','YYYY-MM-DD, hh:mm'),
                    scopo:'Conquistare il mondo'}]},
        {id:3, prenotazioni:[
                {   key:Math.random(),
                    nome:'Mario',
                    dataStart:moment('2022-02-10, 10:00','YYYY-MM-DD, hh:mm'),
                    dataEnd:moment('2022-02-10, 11:30','YYYY-MM-DD, hh:mm'),
                    scopo:'Come mangiare bene'}]},
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
                        nome:action.nome,
                        dataStart:action.dataStart,
                        dataEnd:action.dataEnd,
                        scopo:action.scopo
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
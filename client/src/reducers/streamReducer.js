import {STREAM_CREATE,
    FETCH_STREAMS,
    FETCH_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types'
import _ from 'lodash'

const authReducer= (state ={},action) => {
    switch(action.type){
        case STREAM_CREATE:
            return{...state , [action.payload.id] : action.payload}
        case FETCH_STREAM: 
            return{...state , [action.payload.id] : action.payload}
        case FETCH_STREAMS:{
            return{...state, ..._.mapKeys(action.payload,'id')}}
        case EDIT_STREAM: 
            return{...state , [action.payload.id] : action.payload}
        case DELETE_STREAM:
            return _.omit(state, action.payload)
        default: 
            return state
    }
}
export default authReducer;
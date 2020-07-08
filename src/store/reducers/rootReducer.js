// import authReducer from './authReducer'
// import projectReducer from './projectReducer'
import { firebaseReducer} from "react-redux-firebase"
import { firestoreReducer } from 'redux-firestore'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    firebase: firebaseReducer,      //handle our auth and connects it to our state
    firestore: firestoreReducer,        //handles our db collection and connects it to our state
    // auth: authReducer,
    // project: projectReducer,
})

export default rootReducer
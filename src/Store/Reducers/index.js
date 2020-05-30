import { combineReducers } from 'redux'
import {saveFetchedShipsReducer, selectShipReducer} from './ShipsReducer'

export default combineReducers({
    ships: saveFetchedShipsReducer,
    currentShip: selectShipReducer
})
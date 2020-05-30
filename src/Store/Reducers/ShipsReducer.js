import {SAVE_FETCHED_DATA, SELECT_SHIP} from "../Actions/types"

export const saveFetchedShipsReducer = (state = [], action) => {
    switch (action.type) {
        case SAVE_FETCHED_DATA:
            return action.payload
        default:
            return state
    }
}

export const selectShipReducer = (state = null, action) => {
    switch (action.type) {
        case SELECT_SHIP:
            return action.payload
        default:
            return state
    }
}
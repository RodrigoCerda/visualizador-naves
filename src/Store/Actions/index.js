import { SAVE_FETCHED_DATA, SELECT_SHIP } from "./types"
import Api from "../../Api"

export const selectShip = (ship) => {
    return {
        type: SELECT_SHIP,
        payload: ship
    }
}

export const fetchShips = (dispatch) => {
    return Api.getShips().then(response => {
        return dispatch({
            type: SAVE_FETCHED_DATA,
            payload: response.data.results
        })
    }).catch(err => console.log("error", err))
}
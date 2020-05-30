import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectShip } from "../../Store/Actions"
import { Form, Col } from "react-bootstrap";
export default () => {
    const { ships } = useSelector(state => ({
        ships: state.ships,
        selectedShip: state.currentShip
    }))
    const dispatch = useDispatch()
    const handleSelectShip = (e) => {
        const shipID = e.target.value
        if (!(shipID < 0)) {
            dispatch(selectShip(ships[shipID]))
        }
    }
    const style = {
        backgroundColor: 'black',
        color: 'white'
    }
    return (
        <Col xs={12}>
            <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Control as="select" 
                    style={style}
                    onChange={handleSelectShip}
                     >
                        {ships.map((ship, index) => (
                            <option value={index} key={"ship-key-" + index}>{ship.name}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
            </Form>
        </Col>

    )
}
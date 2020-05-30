import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectShip } from "../../Store/Actions"
import { Form, Col } from "react-bootstrap";
export default () => {
    // obtención de naves desde store
    const ships = useSelector(state => state.ships)
    const dispatch = useDispatch()
    const handleSelectShip = (e) => {
        const shipID = e.target.value
        if (!(shipID < 0)) {
            // dispatch de nave seleccionada segun indice en array
            dispatch(selectShip(ships[shipID]))
        }
    }
    // Estilo obtenido de figma
    const style = {
        backgroundColor: 'black',
        color: 'white',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '21px',
    }
    return (
        <Col xs={12}>
            <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Control as="select"
                        className="form-select-ship"
                        style={style}
                        onChange={handleSelectShip}>
                        <option value={-1} disabled
                            selected
                            key={"ship-key-placeholder"}>
                            Seleccione una nave...
                            </option>
                         }
                        {ships.map((ship, index) => (
                                <option value={index}
                                    key={"ship-key-" + index}>
                                    {ship.name}
                                </option>
                            ))}
                    </Form.Control>
                </Form.Group>
            </Form>
        </Col>

    )
}
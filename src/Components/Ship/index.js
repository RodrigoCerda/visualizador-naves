import React from "react";
import { useSelector } from "react-redux";
import { Card, Col } from "react-bootstrap";
import './styles.css';
export default () => {
    //obtención de nave seleccionada desde store
    const ship = useSelector(state => state.currentShip)
    const style = {
        backgroundColor: "rgba(255,255,255,0.7)"
    }
    return (<React.Fragment>
        {!!ship && (
            <Col xs={12}>
                <Card className="text-center py-4 px-2" style={style}>
                    <Card.Body>
                        <Card.Title>{ship.name}</Card.Title>
                        <Card.Text>{ship.model}</Card.Text>
                        <hr />
                        <Card.Subtitle>Fabricante</Card.Subtitle>
                        <Card.Text>{ship.manufacturer}</Card.Text>
                        <Card.Subtitle>Largo</Card.Subtitle>
                        <Card.Text>{ship.length} fts.</Card.Text>
                        <Card.Subtitle>Valor</Card.Subtitle>
                        <Card.Text>{Number(ship.cost_in_credits).toLocaleString()} créditos</Card.Text>
                        <Card.Subtitle>Cantidad pasajeros</Card.Subtitle>
                        <Card.Text>{Number(ship.passengers).toLocaleString()}</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="text-center py-4 px-3 mt-1" style={style}>
                    <Card.Title>Pasajeros</Card.Title>
                    <hr />
                </Card>
            </Col>
        )}
    </React.Fragment>
    )
}
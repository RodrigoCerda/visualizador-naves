import React from "react";
import { useSelector } from "react-redux";
import { Card, Col } from "react-bootstrap"
export default () => {
    const ship = useSelector(state => state.currentShip)
    const style = {
        backgroundColor: "rgba(255,255,255,0.7)"
    }
    return (<React.Fragment>
        {!!ship && (
            <Col xs={12}>
                <Card className="text-center py-4 px-3" style={style}>
                    <Card.Title><h2>{ship.name}</h2></Card.Title>
                    <Card.Text>{ship.model}</Card.Text>
                    <hr />
                    <Card.Subtitle><h4>Fabricante</h4></Card.Subtitle>
                    <Card.Text>{ship.manufacturer}</Card.Text>
                    <Card.Subtitle><h4>Largo</h4></Card.Subtitle>
                    <Card.Text>{ship.length} fts.</Card.Text>
                    <Card.Subtitle><h4>Valor</h4></Card.Subtitle>
                    <Card.Text>{ship.cost_in_credits} créditos</Card.Text>
                    <Card.Subtitle><h4>Cantidad pasajeros</h4></Card.Subtitle>
                    <Card.Text>{ship.passengers}</Card.Text>
                </Card>
                <Card className="text-center py-4 px-3 mt-1" style={style}>
                    <Card.Title><h2>Pasajeros</h2></Card.Title>
                    <hr />


                </Card>
            </Col>
        )}
    </React.Fragment>
    )
}
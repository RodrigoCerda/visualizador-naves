import React from "react";
import SearchBar from "../SearchBar";
import Ship from "../Ship";
import background from "../../Images/background.png";
import { Container, Row } from "react-bootstrap"

export default () => {
    // background de figma
    const containerstyle = {
        height: '100vh',
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        overflowY: 'auto'
    }
    return (
        <Container className="p-4" style={containerstyle}> 
            <Row >
                <SearchBar />
                <Ship />
            </Row>
        </Container>
    )
}
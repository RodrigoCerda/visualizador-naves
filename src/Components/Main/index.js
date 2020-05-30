import React from "react";
import SearchBar from "../SearchBar";
import Ship from "../Ship";
import background from "../../Images/background.png";
import { Container, Row } from "react-bootstrap"

export default () => {
    const style = {
        height: '100vh',
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    return (
        <Container className="p-4" style={style}> 
            <Row>
                <SearchBar />
                <Ship />
            </Row>
        </Container>
    )
}
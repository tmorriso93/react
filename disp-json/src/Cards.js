import React, { Component } from 'react'
import Data from './Data.json'
import {Card, Container, Row, Col} from 'react-bootstrap'


export default class Cards extends Component {
    render() {
        return (
            <div>
                <div className="posts">
                    { Data.map(cards => {
                        return(
                            <div key={cards.id}>
                                <Container >
                                <Row>
                                <Col >
                                <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{cards.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        Card Subtitle
                                    </Card.Subtitle>
                                    <Card.Text>
                                        {cards.description}
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                                </Col>
                                </Row>
                                </Container>
                            </div>
                        )
                    }) }
                </div>
            </div>
        )
    }
}

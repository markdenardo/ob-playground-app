import React, { useState, useEffect } from 'react'
import { Row, Col, Icon, Card }  from 'react-materialize'
import axios from 'axios'

function Canvas(){
    const [strategy, setStrategy] = useState('test the card');
    const [cardId, setCardId] = useState(0);
    const [strategies, setStrategies ] = useState([])

    const getRandomInt = (max) => {
        let num = Math.floor(Math.random() * Math.floor(max))
        // return num
    }

    const getCard = () => {
        setCardId(getRandomInt(466))

        // console.log('cardId', cardId)
        // fetchCard()
    }

    const fetchCards = () => {
        // console.log('cardId', cardId)
        axios
            .get('https://new-strategy.herokuapp.com/cards')
            .then(response => {
                console.log('response',response)
                debugger
                // setStrategies()
                // setStrategy(response.data.data.attributes.strategy)
            })
        console.log('strategy', strategy)
    }

    useEffect(fetchCards, [])

    return( 
        <Row>
            <Col m={6} s={12} >
                <Card
                    className="blue-grey darken-1"
                    closeIcon={<Icon>close</Icon>}
                    revealIcon={<Icon>more_vert</Icon>}
                    textClassName="white-text"
                    title="I am a CARD!"  
                >
                    <ol>I am a very simple card.</ol>
                    {strategy}
                    <ol><button onClick={getCard}>card</button></ol>
                </Card>
                
            </Col>
        </Row>
        )
}

export default Canvas
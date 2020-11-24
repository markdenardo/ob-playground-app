import React, { useState, useEffect } from 'react'
import { Row, Col, Card }  from 'react-materialize'
import axios from 'axios'

function Canvas(){
    const [strategy, setStrategy] = useState('blank card')
    const [cardId, setCardId] = useState(0)
    const [array, setArray] = useState([])

    const getRandomInt = (max) => {
        let num = Math.floor(Math.random() * Math.floor(max))
        return num
    }

    const getCard = () => {
       
            if (array.length !== 0){
                let id = getRandomInt(466) - 1
                let randomStrategy = array[id].attributes.strategy
                setCardId(id)
                setStrategy(randomStrategy)
            }
    }

    const fetchAll = () => {
        setCardId(getRandomInt(466) - 1)
            axios
                .get('https://new-strategy.herokuapp.com/cards')
                .then(response => {
                    console.log('response', response)
                    
                    switch (response.data.data.length){
                        case 0:
                            setStrategy('loading')
                        case 466:
                            console.log('response.data.data', response.data.data)
                            setArray(response.data.data)
                            console.log('array', array)
                        break
                        default:
                            setStrategy('loading')
                    }                    
                })  
       
    }

        useEffect(fetchAll,[])
        // useEffect(getCard,[])


    return( 
        <Row>
            <Col m={1} s={1} >
                <Card   className="blue-grey darken-1"
                        textClassName="white-text">
                    <ol>Oblique Strategies Playground</ol>
                        {strategy}
                    <ol><button onClick={getCard}>card</button></ol>
                </Card>
            </Col>
        </Row>
        )
}

export default Canvas
import React, { useState, useEffect } from 'react'
import { Row, Col, Icon, Card }  from 'react-materialize'
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
                setCardId(getRandomInt(466)-1)
                setStrategy(array[cardId])
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
                            
                            debugger
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
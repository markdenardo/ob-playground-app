import React, { useState, useEffect } from 'react'
import { Row, Col, Icon, Card }  from 'react-materialize'
import axios from 'axios'

function Canvas(){
    const [strategy, setStrategy] = useState({strategy: 'test the card'});
    
    const hook = () => {
        axios
            .get('https://new-strategy.herokuapp.com/cards/1')
            .then(response => {
                console.log('response',response)
                // debugger
                setStrategy(response.data.data.attributes.strategy)
            })
    }

    useEffect(hook, [])

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
                    <ol>{strategy}</ol>
                    <ol><button onClick={hook}>card</button></ol>
                </Card>
                
            </Col>
        </Row>
        )
}

export default Canvas
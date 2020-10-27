import React, { useState, useEffect } from 'react'
import { Row, Col, Icon, Card }  from 'react-materialize'
import axios from 'axios'

function Canvas(){
    const [strategy, setStrategy] = useState('');
    
    const hook = () => {
        axios
            .get('https://new-strategy.herokuapp.com/cards')
            .then(response => {
                console.log(response)
                setJoke(response.data)
            })
    }

    return( 
        <Row>
            <Col m={6} s={12} >
                <Card
                    actions={[
                        <a key="1" href="#">This is a link</a>,
                        <a key="2" href="#">This is a link</a>
                    ]}
                    className="blue-grey darken-1"
                    closeIcon={<Icon>close</Icon>}
                    revealIcon={<Icon>more_vert</Icon>}
                    textClassName="white-text"
                    title="I am a CARD!"
                >
                    I am a very simple card.
                </Card>
            </Col>
        </Row>
        )
}

export default Canvas
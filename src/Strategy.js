import { useState, useEffect } from 'react'
import { Card } from 'react-materialize'
import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/cards'
const cors = require('cors')


function Strategy(){
    
    const hook = () => {
       
        axios
        .get(baseUrl)
        .then(response => {
            console.log('response',response) 
        })
    }
    
    useEffect(hook, [])

    return(
        <div>
            new strategy: 
        </div>
    )
}
 export default Strategy


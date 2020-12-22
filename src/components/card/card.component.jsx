import React from 'react';

import './card.styles.css'
export const Card = (props) => (
    <div className='card-container'>        
        <img alt='pessoas' src={`https://robohash.org/${props.person.id}?set=set2`}  width='300px'/>
        <h1> Name: {props.person.name}  </h1>
        <h3>Email: {props.person.email}</h3>
    </div>
)
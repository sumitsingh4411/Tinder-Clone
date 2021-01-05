import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import "./Tindercard.css"
import db from "./firebase"
function Tindercard() {
    const[people,setpeople]=useState([]);
    useEffect(()=>{
        db.collection('people').onSnapshot(snapshot=>(
            setpeople(snapshot.docs.map(doc=>doc.data()))
        ))
    },[])
    return (
        <div className="tindercard">
            {
                people.map(person=>(
                    <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up','down']}
                    >
                        <div className="card"
                        style={{backgroundImage:`url(${person.url})`}}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))
            }
        </div>
    )
}

export default Tindercard

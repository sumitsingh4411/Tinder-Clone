import { Avatar } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Chat.css"
function Chat({profilepic,name,timestamp,message}) {
    return (
        <Link to={`/chat/${name}`}>
        <div className="chat">
         <Avatar
             className="chat_logo"
             alt={name}
             src={profilepic}
         />
         <div className="chat_right">
             <h2>{name}</h2>
             <p>{message}</p>
         </div>
         <p className="timestamp">{timestamp}</p>
        </div>
        </Link>
    )
}

export default Chat

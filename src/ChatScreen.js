import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'
import "./ChatScreen.css"
function ChatScreen() {
    const[input, setinput]=useState();
    const[message,setmessage]=useState([
        {
            name:"mark",
            message:"what",
            image:"https://image.shutterstock.com/image-photo/micro-peacock-feather-hd-imagebest-260nw-1127238599.jpg"

        },
        {
            name:"sumit singh",
            message:"what aup",
            image:"https://image.shutterstock.com/image-photo/micro-peacock-feather-hd-imagebest-260nw-1127238599.jpg"
        },
        {
            message:"how are you"
        }
    ]);
    const send=(e)=>{
        e.preventDefault();
        setmessage([...message,{message:input}]);
        setinput('');
    }
    return (
        <div className="chatscreen">
             <p className="chat_timestamp">YOU MATCHED ON DATA</p>
             {
                 message.map((mess)=> (
                     mess.name ? (
                     <div className="chatscreen_message">
                     <Avatar
                        className="chatscreen_logo"
                         src={mess.image}
                         alt={mess.name}
                      />
                    <p className="chatscreen_text">{mess.message}</p>
                     </div>
                     ):
                     (
                        <div className="chatscreen_message">
                        <p className="chatscreen_user">{mess.message}</p>
                        </div>
                     )
                 ))
             }
                 <form className="chat_form">
                     <input value={input} onChange={e=>setinput(e.target.value)}
                      className="chatscreen_i" placeholder="type a message"/>
                     <button onClick={send} className="chatscreen_b">SEND</button>
                 </form>

        </div>
    )
}

export default ChatScreen

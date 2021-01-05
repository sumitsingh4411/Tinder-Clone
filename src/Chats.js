import React from 'react'
import Chat from './Chat'
import "./Chats.css"
function Chats() {
    return (
        <div className="chats">
            <Chat
                name="sumit singh"
                message="hii how are you"
                timestamp="35 minutes ago"
                profilepic="https://image.shutterstock.com/image-photo/micro-peacock-feather-hd-imagebest-260nw-1127238599.jpg"
            />
               <Chat
                name="sumit singh"
                message="hii how are you"
                timestamp="35 minutes ago"
                profilepic="https://image.shutterstock.com/image-photo/micro-peacock-feather-hd-imagebest-260nw-1127238599.jpg"
            />
               <Chat
                name="sumit singh"
                message="hii how are you"
                timestamp="35 minutes ago"
                profilepic="https://image.shutterstock.com/image-photo/micro-peacock-feather-hd-imagebest-260nw-1127238599.jpg"
            />
        </div>
    )
}

export default Chats

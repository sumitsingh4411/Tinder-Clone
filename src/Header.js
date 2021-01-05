import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
function Header({backbutton}) {
    const history=useHistory();
    return (
        <div className="header" >
           {
               backbutton ? (
                <IconButton onClick={()=>history.replace(backbutton)}>
                <ArrowBackIosIcon fontSize="large" className="header_logo"/>
                </IconButton>
               ):
               (
                <IconButton>
                <PersonIcon className="header_logo" fontSize="large"/>
                </IconButton>
               )
           }
           
            <Link to="/">
            <img className="header_logo"
                alt=""
                src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
            />
            </Link>
            <Link to="/chat">
            <IconButton>
            <ForumIcon className="header_logo" fontSize="large"/>
            </IconButton>
            </Link>
        </div>
    )
}

export default Header

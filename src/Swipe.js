import React from 'react'
import "./Swipe.css"
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';
function Swipe() {
    return (
        <div  className="swipee">
        <IconButton className="lll">
            <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton className="ll">
            <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton className="l">
            <StarRateIcon fontSize="large"/>
            </IconButton>
            <IconButton className="r">
            <FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton className="rr">
            <FlashOnIcon fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default Swipe

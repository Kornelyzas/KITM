import React from 'react'
import './main.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Page from './Page';
import ImageCover from './ImageCover';

function Main() {
    return (
        <div className='main'>
            <Button variant="contained" className='back_btn'>
                <ArrowBackIosIcon/>
            </Button>

            <ImageCover/>
            
            
            <Button variant="contained" className='next_btn'>
                <ArrowForwardIosIcon/>
            </Button>
        </div>
    )
}

export default Main

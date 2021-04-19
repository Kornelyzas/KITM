import React from 'react'
import './ninethPage.css'
import Image from 'react-bootstrap/Image'
import image from '../images/lapas 8.png'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useHistory } from "react-router-dom";


function NinethPage() {
    const history = useHistory();
  
    const handleRouteBack = () =>{ 
        history.push("/eighth_page");
    }

    const handleRouteForward = () =>{ 
        history.push("/tenth_page");
    }

    return (
        <div className='NinethPage'>
            <Button variant="contained" className='back_btn' onClick={handleRouteBack}>
                <ArrowBackIosIcon/>
            </Button>

            <Image src={image} fluid />

            <Button variant="contained" className='next_btn' onClick={handleRouteForward}>
                <ArrowForwardIosIcon/>
            </Button>
        </div>
    )
}

export default NinethPage
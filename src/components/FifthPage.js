import React from 'react'
import './fifthPage.css'
import Image from 'react-bootstrap/Image'
import image from '../images/lapas 4.png'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useHistory } from "react-router-dom";


function FifthPage() {
    const history = useHistory();
  
    const handleRouteBack = () =>{ 
        history.push("/fourth_page");
    }

    const handleRouteForward = () =>{ 
        history.push("/sixth_page");
    }

    return (
        <div className='FifthPage'>
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

export default FifthPage
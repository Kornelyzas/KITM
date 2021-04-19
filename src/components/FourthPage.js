import React from 'react'
import './fourthPage.css'
import Image from 'react-bootstrap/Image'
import image from '../images/lapas 3.png'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useHistory } from "react-router-dom";


function FourthPage() {
    const history = useHistory();
  
    const handleRouteBack = () =>{ 
        history.push("/third_Page");
    }

    const handleRouteForward = () =>{ 
        history.push("/fifth_Page");
    }

    return (
        <div className='FourthPage'>
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

export default FourthPage
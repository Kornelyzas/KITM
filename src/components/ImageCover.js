import React from 'react'
import './imageCover.css'
import Image from 'react-bootstrap/Image'
import image from '../images/virselis.png'
import imagee from '../images/lapas 1.png'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useHistory } from "react-router-dom";


function ImageCover() {

    const history = useHistory();

    const handleRouteForward = () =>{ 
        history.push("/second_page");
    }

    return (
        <div className='img_cover'>
            <Image src={image} fluid />

            <Button variant="contained" className='next_btn' onClick={handleRouteForward}>
                <ArrowForwardIosIcon/>
            </Button>
        </div>
    )
}

export default ImageCover

import React from 'react'
import './imageCover.css'
import Image from 'react-bootstrap/Image'
import image from '../images/virselis.png'


function ImageCover() {
    return (
        <div className='img_cover'>
            <Image src={image} fluid />
        </div>
    )
}

export default ImageCover

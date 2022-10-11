import React from 'react';
import pic from '../images/pic.png';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
function Card() {
    return (
        <div className='card'>
            <img src={pic} className='card--image' />
            <CardBody />
            <CardFooter />
        </div>
    );
}
export default Card;
import React from 'react';
import facebookIcon from '../images/facebookIcon.png'
import instagramIcon from '../images/instagramIcon.png'
import twitterIcon from '../images/twitterIcon.png'
import gitHubIcon from '../images/gitHubIcon.png'
function CardFooter() {
    return (<div className='card--footer'>
        <img src={facebookIcon} className='card--footer--socials' />
        <img src={gitHubIcon} className='card--footer--socials' />
        <img src={instagramIcon} className='card--footer--socials' />
        <img src={twitterIcon} className='card--footer--socials' />
    </div>);
} 
export default CardFooter;
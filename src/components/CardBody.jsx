import React from 'react';
import emailIcon from '../images/emailIcon.png'
import linkedinIcon from '../images/linkedinIcon.png'
function CardBody() {
    return (<div clasName='card--body'>
        <h1 className='card--body--name' >Laura Smith</h1>
        <h3 className='card--body--position'>Frontend Developer</h3>
        <h5 className='card--body--website'>laurasmith.website</h5>
        <div className='card--body--social'>
            <button className='card--body--social--email'><img src={emailIcon} />Email</button>
            <button className='card--body--social--linked'>
                <img src={linkedinIcon} />LinkedIn</button>
        </div>
        <div className='card--body--about'>
            <h3 className='card--body--about--title'>About</h3>
            <p className='card--body--about--content'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
        <div className='card--body--interests'>
            <h3 className='card--body--interests--title'>Interests</h3>
            <p className='card--body--interests--content'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
    </div>);
}
export default CardBody;
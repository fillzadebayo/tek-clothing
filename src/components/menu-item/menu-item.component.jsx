import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({title, content, imageUrl, size}) => (
    <div className={`${size} menu-item`} >
       
        <div className="background-img"
        style={{
        backgroundImage: `url(${imageUrl})`}}>

        </div>
        <div className="content">
            <h1 className="title"> { title }</h1>
            <p> {content}</p>
            <button className="subtitle"> Shop Now</button>
        </div>
    </div>
    
);

export default MenuItem


import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';


class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  content: 'Assorted hats of all kind',
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  content: 'shop form the best jackets availble from all seasons',
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  content: 'Get shoes for every season',
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  content: ' Summer somethings for the ladies ',
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  content: 'The classic man is right here',
                  linkUrl: 'shop/mens'
                }
              ]
        }
    }

    render (){
        return (
        <div className="directory-menu">
            {
                this.state.sections.map(({id, title, imageUrl, content, size}) => 
                ( <MenuItem key={id} title={title} content={content} imageUrl={imageUrl} size={size}/> ))
            }
           
        </div>  
        )  
    }
}

export default Directory;
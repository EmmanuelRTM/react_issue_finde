import React from 'react';

class ImageCard extends React.Component{
    render(){
        return(
            <div className="image-container">
                <img src={this.props.url} alt="" className="image-view"></img>
            </div>
        );
    }
}

export default ImageCard;
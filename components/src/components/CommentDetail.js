import React from 'react';
import faker from 'faker';

function getTime() {
    return (new Date()).toLocaleTimeString()
}

const CommentDetail = () => {
    return (
        <div className="comment" >
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" clasName="author">
                        {faker.name.firstName()}
                    </a>
                    <div className="metadata">
                        <span className="date">{getTime()}</span>    
                    </div>
                    <div className="text">
                        {faker.lorem.text()}some text here...
                    </div>
                </div>
            </div>
    );
};

export default CommentDetail;
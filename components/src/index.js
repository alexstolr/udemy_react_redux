import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    content={faker.lorem.text()} 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Netta" 
                    content={faker.lorem.text()} 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author={faker.name.firstName()} 
                    content={faker.lorem.text()} 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
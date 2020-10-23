import React from 'react';
import Profile from './Profile';
import LeftSideBar from './LeftSideBar';
import Chat from './Chat';
import CreatePost from './CreatePost';
type PropType = {}
type StateType = {
    name: string,
}
export default class Feed extends React.Component<PropType, StateType> {
    constructor(props: PropType) {
        super(props);
        this.state = {
            name: 'Aycan',
        };
    }

    render() {
        return (
            <div id="page-contents">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 static">
                            <Profile />
                            <LeftSideBar />
                            <Chat />
                        </div>

                        <div className="col-md-7">
                           <CreatePost />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


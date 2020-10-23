import React from 'react';
import Header from './Header';
import Profile from '../components/Profile';
import LeftSideBar from '../components/LeftSideBar';
import Chat from '../components/Chat';
import CreatePost from '../components/CreatePost';
import RightSideBar from '../components/RightSideBar';
type PropType = {}
type StateType = {}
export default class MasterPage extends React.Component {
    constructor(props: PropType) {
        super(props);

    }

    render() {
        return (
            <div>
                <Header> </Header>
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

                            <div className="col-md-2 static">
                                <RightSideBar/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


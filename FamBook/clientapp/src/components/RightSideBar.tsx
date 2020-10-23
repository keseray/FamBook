import React from 'react';
type PropType = {};
type StateType = {};

export default class RightSideBar extends React.Component<PropType, StateType>{
    constructor(props: PropType) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="suggestions" id="sticky-sidebar">
                <h4 className="grey">Who to Follow</h4>
                <div className="follow-user">
                    <img src="http://placehold.it/300x300" alt="" className="profile-photo-sm pull-left" />
                    <div>
                        <h5><a href="timeline.html">Diana Amber</a></h5>
                        <a href="#" className="text-green">Add friend</a>
                    </div>
                </div>
                <div className="follow-user">
                    <img src="http://placehold.it/300x300" alt="" className="profile-photo-sm pull-left" />
                    <div>
                        <h5><a href="timeline.html">Cris Haris</a></h5>
                        <a href="#" className="text-green">Add friend</a>
                    </div>
                </div>
                <div className="follow-user">
                    <img src="http://placehold.it/300x300" alt="" className="profile-photo-sm pull-left" />
                    <div>
                        <h5><a href="timeline.html">Brian Walton</a></h5>
                        <a href="#" className="text-green">Add friend</a>
                    </div>
                </div>
                <div className="follow-user">
                    <img src="http://placehold.it/300x300" alt="" className="profile-photo-sm pull-left" />
                    <div>
                        <h5><a href="timeline.html">Olivia Steward</a></h5>
                        <a href="#" className="text-green">Add friend</a>
                    </div>
                </div>
                <div className="follow-user">
                    <img src="http://placehold.it/300x300" alt="" className="profile-photo-sm pull-left" />
                    <div>
                        <h5><a href="timeline.html">Sophia Page</a></h5>
                        <a href="#" className="text-green">Add friend</a>
                    </div>
                </div>
                </div>
            );
    }
}
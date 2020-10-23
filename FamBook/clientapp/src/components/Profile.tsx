import React from 'react';
type PropType = {};
type StateType = {};

export default class Profile extends React.Component<PropType, StateType>{
    constructor(props: PropType) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="profile-card">
                <img src="http://placehold.it/300x300" alt="user" className="profile-photo" />
                <h5><a href="timeline.html" className="text-white">Sarah Cruiz</a></h5>
                <a href="#" className="text-white"><i className="ion ion-android-person-add"></i> 1,299 followers</a>
            </div>
            );
    }

}
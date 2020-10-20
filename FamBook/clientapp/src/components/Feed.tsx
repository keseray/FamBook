import React from 'react';
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
                <body>
                    <div id="page-contents">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 static">
                                    <div className="profile-card">
                                        <img src="http://placehold.it/300x300" alt="user" className="profile-photo" />
                                        <h5><a href="timeline.html" className="text-white">Sarah Cruiz</a></h5>
                                        <a href="#" className="text-white"><i className="ion ion-android-person-add"></i> 1,299 followers</a>
                                    </div>
                                    <ul className="nav-news-feed">
                                        <li><i className="icon ion-ios-paper"></i><div><a href="newsfeed.html">My Newsfeed</a></div></li>
                                        <li><i className="icon ion-ios-people"></i><div><a href="newsfeed-people-nearby.html">People Nearby</a></div></li>
                                        <li><i className="icon ion-ios-people-outline"></i><div><a href="newsfeed-friends.html">Friends</a></div></li>
                                        <li><i className="icon ion-chatboxes"></i><div><a href="newsfeed-messages.html">Messages</a></div></li>
                                        <li><i className="icon ion-images"></i><div><a href="newsfeed-images.html">Images</a></div></li>
                                        <li><i className="icon ion-ios-videocam"></i><div><a href="newsfeed-videos.html">Videos</a></div></li>
                                    </ul>
                                    <div id="chat-block">
                                        <div className="title">Chat online</div>
                                        <ul className="online-users list-inline">
                                            <li><a href="newsfeed-messages.html" title="Linda Lohan"><img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
                                            <li><a href="newsfeed-messages.html" title="Sophia Lee"><img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
                                            <li><a href="newsfeed-messages.html" title="John Doe"><img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
                                            <li><a href="newsfeed-messages.html" title="Alexis Clark"><img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
                                            <li><a href="newsfeed-messages.html" title="James Carter"><img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
                                            <li><a href="newsfeed-messages.html" title="Robert Cook"><img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
                                            <li><a href="newsfeed-messages.html" title="Richard Bell"><img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
                                            <li><a href="newsfeed-messages.html" title="Anna Young"><img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
                                            <li><a href="newsfeed-messages.html" title="Julia Cox"><img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-7">
                                    <div className="create-post">
                                        <div className="row">
                                            <div className="col-md-7 col-sm-7">
                                                <div className="form-group">
                                                    <img src="http://placehold.it/300x300" alt="" className="profile-photo-md" />
                                                    <textarea name="texts" id="exampleTextarea" cols={30} rows={1} className="form-control" placeholder="Write what you wish"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-5 col-sm-5">
                                                <div className="tools">
                                                    <ul className="publishing-tools list-inline">
                                                        <li><a href="#"><i className="ion-compose"></i></a></li>
                                                        <li><a href="#"><i className="ion-images"></i></a></li>
                                                        <li><a href="#"><i className="ion-ios-videocam"></i></a></li>
                                                        <li><a href="#"><i className="ion-map"></i></a></li>
                                                    </ul>
                                                    <button className="btn btn-primary pull-right">Publish</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
        );
    }
}


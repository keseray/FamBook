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
            <div className="shopping-list">
                <h1>Shopping List for {this.state.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>

                <head>
                    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="description" content="This is social network html5 template available in themeforest......" />
                    <meta name="keywords" content="Social Network, Social Media, Make Friends, Newsfeed, Profile Page" />
                    <meta name="robots" content="index, follow" />
                    <title>News Feed | Check what your friends are doing</title>
                    <link rel="stylesheet" href="css/bootstrap.min.css" />
                    <link rel="stylesheet" href="css/style.css" />
                    <link rel="stylesheet" href="css/ionicons.min.css" />
                    <link rel="stylesheet" href="css/font-awesome.min.css" />
                    <link href="css/emoji.css" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700,700i" rel="stylesheet" />
                    <link rel="shortcut icon" type="image/png" href="images/fav.png" />
                </head>
                <body>
                    <header id="header">
                        <nav className="navbar navbar-default navbar-fixed-top menu" >
                            <div className="container">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <a className="navbar-brand" href="index-register.html"><img src="images/logo.png" alt="logo" /></a>
                                </div>
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav navbar-right main-menu">
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Home <span><img src="images/down-arrow.png" alt="" /></span></a>
                                            <ul className="dropdown-menu newsfeed-home">
                                                <li><a href="index.html">Landing Page 1</a></li>
                                                <li><a href="index-register.html">Landing Page 2</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Newsfeed <span><img src="images/down-arrow.png" alt="" /></span></a>
                                            <ul className="dropdown-menu newsfeed-home">
                                                <li><a href="newsfeed.html">Newsfeed</a></li>
                                                <li><a href="newsfeed-people-nearby.html">Poeple Nearly</a></li>
                                                <li><a href="newsfeed-friends.html">My friends</a></li>
                                                <li><a href="newsfeed-messages.html">Chatroom</a></li>
                                                <li><a href="newsfeed-images.html">Images</a></li>
                                                <li><a href="newsfeed-videos.html">Videos</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Timeline <span><img src="images/down-arrow.png" alt="" /></span></a>
                                            <ul className="dropdown-menu login">
                                                <li><a href="timeline.html">Timeline</a></li>
                                                <li><a href="timeline-about.html">Timeline About</a></li>
                                                <li><a href="timeline-album.html">Timeline Album</a></li>
                                                <li><a href="timeline-friends.html">Timeline Friends</a></li>
                                                <li><a href="edit-profile-basic.html">Edit: Basic Info</a></li>
                                                <li><a href="edit-profile-work-edu.html">Edit: Work</a></li>
                                                <li><a href="edit-profile-interests.html">Edit: Interests</a></li>
                                                <li><a href="edit-profile-settings.html">Account Settings</a></li>
                                                <li><a href="edit-profile-password.html">Change Password</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle pages" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">All Pages <span><img src="images/down-arrow.png" alt="" /></span></a>
                                            <ul className="dropdown-menu page-list">
                                                <li><a href="index.html">Landing Page 1</a></li>
                                                <li><a href="index-register.html">Landing Page 2</a></li>
                                                <li><a href="newsfeed.html">Newsfeed</a></li>
                                                <li><a href="newsfeed-people-nearby.html">Poeple Nearly</a></li>
                                                <li><a href="newsfeed-friends.html">My friends</a></li>
                                                <li><a href="newsfeed-messages.html">Chatroom</a></li>
                                                <li><a href="newsfeed-images.html">Images</a></li>
                                                <li><a href="newsfeed-videos.html">Videos</a></li>
                                                <li><a href="timeline.html">Timeline</a></li>
                                                <li><a href="timeline-about.html">Timeline About</a></li>
                                                <li><a href="timeline-album.html">Timeline Album</a></li>
                                                <li><a href="timeline-friends.html">Timeline Friends</a></li>
                                                <li><a href="edit-profile-basic.html">Edit Profile</a></li>
                                                <li><a href="contact.html">Contact Us</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a href="contact.html">Contact</a></li>
                                    </ul>
                                    <form className="navbar-form navbar-right hidden-sm">
                                        <div className="form-group">
                                            <i className="icon ion-android-search"></i>
                                            <input type="text" className="form-control" placeholder="Search friends, photos, videos" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </header>

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
            </div>
        );
    }
}


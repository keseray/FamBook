import React from 'react';
import Feed from '../components/Feed';
type PropType = {}
type StateType = {}

export default class Header extends React.Component {
    constructor(props: PropType) {
        super(props)

    }

    render() {
        return (
                <header id="header">
                    <nav className="navbar navbar-default navbar-fixed-top menu" >
                        <div className="container">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="index-register.html"><img src="images/logo.png" alt="logo" /></a>
                            </div>
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-right main-menu">
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Home <span><img src="images/down-arrow.png" alt="" /></span></a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Newsfeed <span><img src="images/down-arrow.png" alt="" /></span></a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Timeline <span><img src="images/down-arrow.png" alt="" /></span></a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle pages" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">All Pages <span><img src="images/down-arrow.png" alt="" /></span></a>
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
        );

    }


}
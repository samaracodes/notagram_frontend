import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";
import { connect } from 'react-redux'
import Posts from '../components/Posts'
import Home from "../components/Home"
import Login from "../components/Login"
import Logout from '../components/Logout';
import { fetchPosts } from '../actions/managePosts';
import { getCurrentUser } from '../actions/currentUser'



class MainContainer extends Component {

    render() {
        const {loggedIn} = this.props
        console.log(this.props.posts)
        return (
            <Routes>
                <Route path="/" element={<Home posts={this.props.posts} />} />
                <Route path="login" element={loggedIn ? <Logout /> : <Login />} />
=
            </Routes>
        )
    }

    componentDidMount() {
        this.props.fetchPosts()
        this.props.getCurrentUser()
    }
}

const mapStateToProps = state => {
    return {
        posts: state.allPosts.posts,
        loggedIn: state.currentUser
    }
}

export default connect(mapStateToProps, { fetchPosts, getCurrentUser })(MainContainer)
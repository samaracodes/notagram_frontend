import React, { Component } from 'react'
import Posts from '../components/Posts'
import PostsForm from '../components/PostsForm'
import { Routes, Route } from 'react-router-dom'

class PostsContainer extends Component {

    render() {
        return (
            <Routes>
                <Route path="posts" element={<PostsForm />}  />
            </Routes>
        )
    }
}

export default PostsContainer
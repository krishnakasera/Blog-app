import React, { useEffect, useState } from 'react';
import API from './api';
import AddPost from './components/AddPost';
import PostList from './components/PostList';
import './App.css';

function App() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const res = await API.get('/');
        setPosts(res.data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Blog App</h1>
            <AddPost fetchPosts={fetchPosts} />
            <PostList posts={posts} fetchPosts={fetchPosts} />
        </div>
    );
}

export default App;

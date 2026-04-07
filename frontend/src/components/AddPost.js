import React, { useState } from 'react';
import API from '../api';

function AddPost({ fetchPosts }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.post('/', { title, content });
        setTitle('');
        setContent('');
        fetchPosts();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
            <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" required />
            <button type="submit">Add Post</button>
        </form>
    );
}

export default AddPost;
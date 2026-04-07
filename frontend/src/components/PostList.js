import React from 'react';
import API from '../api';

function PostList({ posts, fetchPosts }) {

    const deletePost = async (id) => {
        await API.delete(`/${id}`);
        fetchPosts();
    };

    return (
        <div>
            {posts.map(post => (
                <div key={post._id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <button onClick={() => deletePost(post._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default PostList;
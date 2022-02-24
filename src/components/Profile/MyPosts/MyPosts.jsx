import React from 'react';
import ObjectStyle from './MyPosts.module.css';
import AddPostForm from './Post/AddPostForm';
import Post from './Post/Post';
const MyPosts = (props) => {

  let PostElements = [...props.posts].reverse().map(p => <Post massage={p.massage} likesCount={p.likesCount} key={p.id} />)

  return (
    <div className={ObjectStyle.content}>
      <div className={ObjectStyle.myPosts}>
        <h3>My Posts</h3>
      </div>
      <AddPostForm addPost={props.addPost} />
      {PostElements}
    </div >
  )
}
export default MyPosts;
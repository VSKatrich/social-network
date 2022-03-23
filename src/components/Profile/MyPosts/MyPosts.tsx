import React, { FC } from 'react';
import { PostsType } from '../../../types/types';
import ObjectStyle from './MyPosts.module.css';
import AddPostForm from './Post/AddPostForm';
import Post from './Post/Post';

type PropsType = {
  posts: Array<PostsType>
  addPost: (postBody: string) => void
}

const MyPosts = ({ posts, addPost }: PropsType): JSX.Element => {

  let PostElements = [...posts].reverse().map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />)

  return (
    <div className={ObjectStyle.content}>
      <div className={ObjectStyle.myPosts}>
        <h3>My Posts</h3>
      </div>
      <AddPostForm addPost={addPost} />
      {PostElements}
    </div >
  )
}
export default MyPosts;
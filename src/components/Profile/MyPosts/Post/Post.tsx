import ObjectStyle from './Post.module.css';

type PropsType = {
  message: string
  likesCount: number
}

const Post = ({ message, likesCount }: PropsType): JSX.Element => {
  return (
    <div className={ObjectStyle.item}>
      <div>
        <img src='https://previews.123rf.com/images/meysye/meysye1904/meysye190400002/121250278-female-silhoutte-avatar-default-avatar-profile-picture-photo-placeholder.jpg'></img>
        {message}
      </div>
      <div>
        <span>like </span>
        {likesCount}
      </div>
    </div>
  );
}
export default Post;
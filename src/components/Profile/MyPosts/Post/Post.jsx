import ObjectStyle from './Post.module.css';
const Post = (props) => {
  return (
    <div className={ObjectStyle.item}>
      <div>
        <img src='https://previews.123rf.com/images/meysye/meysye1904/meysye190400002/121250278-female-silhoutte-avatar-default-avatar-profile-picture-photo-placeholder.jpg'></img>
        {props.message}
      </div>
      <div>
        <span>like </span>
        {props.likesCount}
      </div>
    </div>
  );
}
export default Post;
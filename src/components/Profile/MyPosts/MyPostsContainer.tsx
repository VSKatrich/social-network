import { connect } from 'react-redux';
import { actions } from '../../../Redux/profile-reducer';
import { AppStateType } from '../../../Redux/redux-store';
import { PostsType } from '../../../types/types';
import MyPosts from './MyPosts';

type MapStateToPropsType = {
  posts: Array<PostsType>
}
type MapDispatchToProps = {
  addPost: (postBody: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  posts: state.profilePage.posts
})

export default connect<MapStateToPropsType, MapDispatchToProps, {}, AppStateType>
  (mapStateToProps, { addPost: actions.addPost })(MyPosts);
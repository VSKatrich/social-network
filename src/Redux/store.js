import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hallo! My name is Victoria.', likesCount: 23 },
        { id: 2, message: 'What are you doing now?', likesCount: 34 },
        { id: 3, message: 'What are you doing now?', likesCount: 37 },
      ],
      newPostText: 'titi-miti'
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Michel', image: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg' },
        { id: 2, name: 'Sasha', image: 'https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg' },
        { id: 3, name: 'Zahar', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6qxRGXu9_Mou7APQCryC7T3F7s_YXmCSWQ&usqp=CAU' },
        { id: 4, name: 'Victoria', image: 'https://cdn3.vectorstock.com/i/1000x1000/20/67/woman-avatar-profile-vector-21372067.jpg' },
        { id: 5, name: 'Liza', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGCQgVvWlH2SmL03iIX5K6V_Vkty9yBI5S0w&usqp=CAU' }
      ],
      messages: [
        { id: 1, message: "Hi! It's snowing now!" },
        { id: 2, message: "I'm living in Saint-Petersburg" },
        { id: 3, message: "Give me a money" },
        { id: 4, message: "I'm living in Saint-Petersburg" },
        { id: 5, message: 'WOW!' }
      ],
      newMessageText: ''
    },
    sidebarPage: {

    }
  },
  _callSubscriber() {
    console.log('');
  },

  getState() {
    return this._state;
  },
  Subscribe(Observer) {
    this._callSubscriber = Observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
    this._callSubscriber();
  }
};

export default store;
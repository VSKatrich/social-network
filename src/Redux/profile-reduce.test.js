import profileReducer, { addPostActionCreator } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, massage: 'Hallo! My name is Victoria.', likesCount: 23 },
    { id: 2, massage: 'What are you doing now?', likesCount: 34 },
    { id: 3, massage: '  ', likesCount: 37 },
  ]
};

it('length of post should be incremented', () => {
  // 1. test data
  let action = addPostActionCreator('WOW')
  // 2. action
  let newState = profileReducer(state, action)
  // 3. expectation
  expect(newState.posts.length).toBe(4);
});


it('message in 4 post should be WOW', () => {
  // 1. test data
  let action = addPostActionCreator('WOW')
  // 2. action
  let newState = profileReducer(state, action)
  // 3. expectation
  expect(newState.posts[3].massage).toBe('WOW');
});
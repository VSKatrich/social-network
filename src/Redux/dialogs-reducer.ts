import { InferActionsTypes } from './redux-store';
let ADD_NEW_message = 'ADD_NEW_message'

type DialogsType = {
  id: number
  name: string
  image: string
}
type MessagesType = {
  id: number
  message: string
}

let initialState = {
  dialogs: [
    { id: 1, name: 'Michel', image: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg' },
    { id: 2, name: 'Sasha', image: 'https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg' },
    { id: 3, name: 'Zahar', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6qxRGXu9_Mou7APQCryC7T3F7s_YXmCSWQ&usqp=CAU' },
    { id: 4, name: 'Victoria', image: 'https://cdn3.vectorstock.com/i/1000x1000/20/67/woman-avatar-profile-vector-21372067.jpg' },
    { id: 5, name: 'Liza', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGCQgVvWlH2SmL03iIX5K6V_Vkty9yBI5S0w&usqp=CAU' }
  ] as Array<DialogsType>,
  messages: [
    { id: 1, message: "Hi! It's snowing now!" },
    { id: 2, message: "I'm living in Saint-Petersburg" },
    { id: 3, message: "Give me a money" },
    { id: 4, message: "I'm living in Saint-Petersburg" },
    { id: 5, message: 'WOW!' }
  ] as Array<MessagesType>,
  newMessageText: '' as string
};

export type InitialStateDialogsReducer = typeof initialState
export type ActionType = InferActionsTypes<typeof actions>

const dialogsReducer = (state = initialState, action: ActionType): InitialStateDialogsReducer => {
  switch (action.type) {
    case ADD_NEW_message:
      let newMessageText = action.newMessageText
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: newMessageText }]
      };

    default:
      return state;
  }
}

export const actions = {
  sendMessage: (newMessageText: string) => (
    { type: ADD_NEW_message, newMessageText }
  ) as const
}

export default dialogsReducer;

let ADD_NEW_MASSAGE = 'ADD_NEW_MASSAGE'

let initialState = {
  dialogs: [
    { id: 1, name: 'Michel', image: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg' },
    { id: 2, name: 'Sasha', image: 'https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg' },
    { id: 3, name: 'Zahar', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6qxRGXu9_Mou7APQCryC7T3F7s_YXmCSWQ&usqp=CAU' },
    { id: 4, name: 'Victoria', image: 'https://cdn3.vectorstock.com/i/1000x1000/20/67/woman-avatar-profile-vector-21372067.jpg' },
    { id: 5, name: 'Liza', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGCQgVvWlH2SmL03iIX5K6V_Vkty9yBI5S0w&usqp=CAU' }
  ],
  massages: [
    { id: 1, massage: "Hi! It's snowing now!" },
    { id: 2, massage: "I'm living in Saint-Petersburg" },
    { id: 3, massage: "Give me a money" },
    { id: 4, massage: "I'm living in Saint-Petersburg" },
    { id: 5, massage: 'WOW!' }
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MASSAGE:
      let newMassageText = action.newMassageText
      return {
        ...state,
        massages: [...state.massages, { id: 6, massage: newMassageText }]
      };

    default:
      return state;
  }
}

export const sendMassage = (newMassageText) => ({ type: ADD_NEW_MASSAGE, newMassageText });

export default dialogsReducer;

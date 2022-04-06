const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogsItemsData: [
    {
      id: "1",
      name: "Вася Пупкин",
      src: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
    },
    {
      id: "2",
      name: "Петя Шляпкин",
      src: "https://i.pinimg.com/originals/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg",
    },
    {
      id: "3",
      name: "Стёпа",
      src: "https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg",
    },
    {
      id: "5",
      name: "Артур",
      src: "https://vsekidki.ru/uploads/posts/2016-08/1470735121_lecdaa3axdc.jpg",
    },
  ],

  messagesData: [
    { id: "1", message: "Hello" },
    { id: "2", message: "Hi" },
    { id: "3", message: "How are you?" },
    { id: "4", message: "I'm fine" },
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: 5, message: action.messageText },
        ]
      };
    default:
      return state;
  }
};

export const sendMessage = (messageText) => ({
  type: SEND_MESSAGE,
  messageText
});

export default dialogsReducer;
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, text: "Сегодня отличная погода!", likesCount: 27 },
        {
          id: 2,
          text: "Дистант окончен. С понедельника очное обучение!",
          likesCount: 63,
        },
        { id: 3, text: "Чупапимуняня", likesCount: 108 },
      ],

      currTextPost: "",
    },
    dialogsPage: {
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
          id: "4",
          name: "Гриша",
          src: "https://content.freelancehunt.com/cdn-cgi/image/format=auto,width=800,dpr=1/snippet/34ada/e9b03/1167943/23FF6C39-7655-437B-A8A8-00C64163CC37.jpeg",
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
      ],

      currTextMessage: "",
    },
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
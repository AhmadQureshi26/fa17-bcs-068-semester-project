import { getChats } from "../Firebase/firebase.js";

let defaultState = {
  chats: [],
};

const allChatsReducer = (state = defaultState, event) => {
  switch (event.type) {
    case "loadAllChats":
      let chats = getChats();
      console.log("chats in reducer are:", chats);
      return { chats };
    // return state;

    default:
      return state;
  }
};

export { allChatsReducer };

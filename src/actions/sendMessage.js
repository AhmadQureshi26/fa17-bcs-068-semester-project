import { database } from "../Firebase/firebase.js";
import { loadUserChat } from "./loadUserChat";
import { firebase } from "../Firebase/firebase.js";

export const sendMessage = (uid, resID, message) => {
  return (dispatch) => {
    database
      .ref(`users/${uid}/chats/chat${resID}/messages`)
      .push({
        messageBody: message,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        sent: true,
      })
      .then(() => {
        database
          .ref(`users/${resID}/chats/chat${uid}/messages`)
          .push({
            messageBody: message,
            createdAt: firebase.database.ServerValue.TIMESTAMP,
            sent: false,
          })
          .then(dispatch(loadUserChat(uid, resID)))
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  };
};

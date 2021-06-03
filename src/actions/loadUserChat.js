import { database } from "../Firebase/firebase.js";

export const loadUserChatAction = (resID, messages) => {
  return { type: "loadUserChat", messages: messages, resID: resID };
};

export const loadUserChat = (uid, resID) => {
  let messages = [];
  console.log(`load user chat is getting res id:${resID},and uid:${uid}`);

  return (dispatch) => {
    database
      .ref(`users/${uid}/chats`)
      .orderByChild("to")
      .equalTo(resID)
      .once("value")
      .then((DataSnapShot) => {
        console.log("data of this chat is:", DataSnapShot.val());
        DataSnapShot.forEach((childSnapshot) => {
          if (childSnapshot.val().messages !== undefined) {
            console.log(childSnapshot.val().messages);
            let messagesObject = childSnapshot.val().messages;
            for (let [value] of Object.entries(messagesObject)) {
              messages.push(value);
            }
          }
        });
        console.log("messages array:", messages);

        dispatch(loadUserChatAction(resID, messages));
      })
      .catch((e) => console.log(e));
  };
};

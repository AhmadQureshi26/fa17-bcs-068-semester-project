import * as firebase from "firebase";
import store from "../store/store.js";
import { loadAllChatsAction } from "../actions/loadChats.js";
// import { saveUid } from "../actions/auth.js";
import { loadUserChat } from "../actions/loadUserChat.js";

var firebaseConfig = {
  apiKey: "AIzaSyCQPrfJKBlrGPlVKFHsjlzLxbD0s3eNdC8",
  authDomain: "testapp-69057.firebaseapp.com",
  databaseURL: "https://testapp-69057.firebaseio.com",
  projectId: "testapp-69057",
  storageBucket: "testapp-69057.appspot.com",
  messagingSenderId: "142469660223",
  appId: "1:142469660223:web:8464b085c37f066b2dc28a",
  measurementId: "G-7N6XSKN859",
};
// firebase.auth.RecaptchaVerifier();
// process.env.FIREBASE_API_KEY=AIzaSyCQPrfJKBlrGPlVKFHsjlzLxbD0s3eNdC8,
// process.env.FIREBASE_AUTH_DOMAIN=testapp-69057.firebaseapp.com,
// process.env.FIREBASE_DATABASE_URL=https://testapp-69057.firebaseio.com,
// process.env.FIREBASE_PROJECT_ID=testapp-69057,
//  process.env.FIREBASE_STORAGE_BUCKET=testapp-69057.appspot.com,
// process.env.FIREBASE_MESSAGING_SENDER_ID=G-7N6XSKN859

firebase.initializeApp(firebaseConfig);
let database = firebase.database();
let provider = new firebase.auth.GoogleAuthProvider();

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     store.dispatch(saveUid(user.uid));
//     database
//       .ref("users")
//       .orderByChild("id")
//       .equalTo(user.uid)
//       .once("value", (snapshot) => {
//         if (snapshot.exists()) {
//         } else {
//           saveUserToDb(user.uid, store.getState().authReducer.username);
//           getAllUsers(user.uid, store.getState().authReducer.username);
//         }
//       });
//     getUserChats(user.uid);
//   } else {
//     console.log("user logged out", user);
//   }
// });
//
//
//
const saveUserToDb = (uid, userName) => {
  database
    .ref(`users/${uid}`)
    .set({
      id: uid,
      userName: userName,
    })
    .then(console.log("data saved"))
    .catch((e) => {
      console.log(e);
    });
};

let users = [];
let usersData = [];

function getAllUsers(uid, username) {
  database
    .ref("users")
    .once("value", (snapshot) => {
      console.log("all users", snapshot.val());
      snapshot.forEach((child) => {
        users.push(child.key);
        usersData.push(child.val());
      });
      users = users.filter((user) => user !== uid);
      usersData = usersData.filter((user) => user.id !== uid);
      console.log("user keys are:", users);
      console.log("user data is:", usersData);
      saveUserToOtherChats(uid, username);
      saveOtherUserstoChat(uid, username);
      getUserChats(uid);
      store.dispatch(loadAllChatsAction(uid));
    })
    .then()
    .catch((e) => {
      console.log(e);
    });
}
//
//
//
function saveUserToOtherChats(uid, username) {
  console.log("in saveUserToChats");
  console.log(users);
  users.forEach((user) => {
    console.log("in for each", user);
    database
      .ref(`users/${user}/chats/chat${uid}`)
      .set({
        to: uid,
        userName: username,
      })
      .then(console.log("chats saved to db"))
      .catch((e) => {
        console.log(e);
      });
  });
}
//
//
//
const saveOtherUserstoChat = function (uid, username) {
  usersData.forEach((user) => {
    database
      .ref(`users/${uid}/chats/chat${user.id}`)
      .set({
        to: user.id,
        userName: user.userName,
      })
      .then(console.log("saved other users to this chat"))
      .catch((e) => console.log(e));
  });
};
//
//
//
let chats = [];
let modChats = [];
//
const getUserChats = (uid) => {
  database.ref(`users/${uid}/chats`).once("value", (snapshot) => {
    console.log("these are chats for logged in user:");
    snapshot.forEach((childSnapshot) => {
      convertSnapshotToArray(childSnapshot);
    });
    console.log("mod chat is:", modChats);
    store.dispatch(loadAllChatsAction(store.getState().authReducer.uid));
    store.dispatch({ type: "login" });
  });
};
//
//
//
const convertSnapshotToArray = (childSnapshot) => {
  chats.push({
    id: childSnapshot.key,
    chatObj: childSnapshot.val(),
  });
  chats.forEach((singleChat) => {
    let messages = [];
    if (singleChat.chatObj.messages !== undefined) {
      console.log("there are chat messages for this chat amongst all chats");
      for (let [value] of Object.entries(singleChat.chatObj.messages)) {
        console.log("value of object", value);
        messages.push({
          messageBody: value.messageBody,
          createdAt: value.createdAt,
          sent: value.sent,
        });
      }
    }
    modChats.push({
      to: singleChat.chatObj.to,
      userName: singleChat.chatObj.userName,
      messages: messages,
    });
  });
};
//
//
//
const getChats = () => {
  return modChats;
};
//
//
//
export const startListenToChatMessages = (uid, resID) => {
  database
    .ref(`users/${uid}/chats/chat${resID}/messages`)
    .on("child_added", (DataSnapshot) => {
      store.dispatch(loadUserChat(uid, resID));
    });
};
// console.log("the user chat is:hjqwhsj");

//
//
//
export { firebase, database, provider, saveUserToDb, getUserChats, getChats };

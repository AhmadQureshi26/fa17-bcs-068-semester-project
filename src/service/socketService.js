import io from "socket.io-client";
import store from "../store/store";
import { startLoadingQueries } from "../actions/loadQueries";

export const clientSocket = io("http://127.0.0.1:3002");

const startListenToClientQuery = () => {
  clientSocket.emit("adminJoin", {});
  console.log("listening to client queries");
  clientSocket.on("clientQueryToAdmin", (payload, confirmation) => {
    console.log("query from client received as :", payload);
    store.dispatch(startLoadingQueries());
    alert("query from client received");
  });
};

export { startListenToClientQuery };

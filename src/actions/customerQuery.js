import { clientSocket } from "../service/socketService.js";

export const customerQuery = (query) => {
  let customerQuery = { ...query, time: new Date().toString() };
  clientSocket.emit("clientQuery", customerQuery, () => {
    alert("Your message was delivered!");
  });
};

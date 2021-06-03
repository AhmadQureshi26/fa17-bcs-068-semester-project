const initialState = { resID: "", messages: [] };

export default (state = initialState, event) => {
  switch (event.type) {
    case "loadUserChat":
      console.log("user messages in reducer arre", event.messages);
      let messages = [];
      messages = event.messages;
      return { resID: event.resID, messages: messages };

    default:
      return state;
  }
};

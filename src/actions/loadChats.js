const loadAllChatsAction = function (id) {
  return {
    type: "loadAllChats",
    uid: id,
  };
};

export { loadAllChatsAction };

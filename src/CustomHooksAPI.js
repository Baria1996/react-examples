// import React from "react";

var ChatAPI = {
  subscribeToFriendStatus(id, handleChangeFunc) {
    alert("Subscribed to friend# " + id);
    handleChangeFunc(true);
  },
  unsubscribeFromFriendStatus(id, handleChangeFunc) {
    alert("Un-subscribed from friend# " + id);
    handleChangeFunc(false);
  },
};

// export { ChatAPI };
export default ChatAPI;
// module.exports = ChatAPI;

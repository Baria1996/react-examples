import React, { useState, useEffect } from "react";
import ChatAPI from "./CustomHooksAPI";

// custom hook whose logic will be shared among the following two components
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}

function FriendListItem(props) {
  //   const [isOnline, setIsOnline] = useState(null);
  //   useEffect(() => {
  //     function handleStatusChange(status) {
  //       setIsOnline(status);
  //     }
  //     ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  //     return () => {
  //       ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  //     };
  //   });

  // replacing the above code with the custom hook
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <h1 style={{ color: isOnline ? "green" : "red" }}>{props.friend.name}</h1>
  );
}

function FriendStatus(props) {
  //   const [isOnline, setIsOnline] = useState(null);
  //   useEffect(() => {
  //     function handleStatusChange(status) {
  //       setIsOnline(status);
  //     }
  //     ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  //     return () => {
  //       ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  //     };
  //   });

  // replacing the above code with the custom hook
  const isOnline = useFriendStatus(props.friend.id);

  let showStatus;
  if (isOnline === null) showStatus = "Loading...";
  if (isOnline === true) showStatus = "Online";
  if (isOnline === false) showStatus = "Offline";

  return (
    <div>
      <h1>
        {props.friend.id} - {props.friend.name}
      </h1>
      <p>Status: {showStatus}</p>
    </div>
  );
}

export { FriendListItem, FriendStatus };

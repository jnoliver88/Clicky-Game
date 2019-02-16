import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

function App() {
  return (
    <Wrapper>
      <h1 className="title">Friends List</h1>

      {friends.map(friend => {
        return (
        <FriendCard
          id={friend.id}
          key={friend.id}
          name={friend.name}
          image={friend.image}
          occupation={friend.occupation}
          location={friend.location}
        /> )
      })}


      />
    </Wrapper>
  );
}

export default App;

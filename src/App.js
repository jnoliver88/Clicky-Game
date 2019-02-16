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
      <div style={{
        height: 50,
        backgroundColor: "purple",
        width: "100%",
        padding: 20,
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        position: "fixed", top:0, left:0, right:0,

      }}>
      <div style={{display:"flex", flex:1, justifyContent:"center", alignItems:"center", padding:5}}>
      <h2>Clicky Game</h2>
      </div>
      <div style={{display:"flex", flex:1, justifyContent:"center", alignItems:"center", padding:5}}>
      <h2>You Guessed Correctly</h2>
      </div>
      
      
      </div>
    </Wrapper>
  );
}

export default App;

import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

function App() {
  return (
    <Wrapper>
      <h1 className="title">Friends List</h1>

      {this}
      <FriendCard
        id={friends.id}
        key={friends.id}
        name={friends.name}
        image={friends.image}
        occupation={friends.occupation}
        location={friends.location}
        setClick={this.setClick}
      />

      />
    </Wrapper>
  );
}

export default App;

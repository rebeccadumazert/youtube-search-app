import React from "react";
import "./App.css";
import AppTitle from "./AppTitle.js"
import SearchBar from "./SearchBar.js"
import VideoPlayer from "./VideoPlayer.js"

function App() {
  return (
    <div className="App">
      <AppTitle></AppTitle>
      <SearchBar></SearchBar>
      <VideoPlayer></VideoPlayer>
    </div>
  );
}

export default App;

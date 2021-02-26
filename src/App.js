import "./App.css";
// REACT IMPORTS--------------------------------------
import React, { useState, useEffect } from "react";
// AXIOS IMPORTIMPORTS--------------------------------------
import axios from "axios";
// COMPONENT IMPORTS ---------------------------------
import Titlebar from "./components/TopBar";
import Playlist from "./components/Playlist";
import FavSong from "./components/FavoriteSongs";
import NewSongs from "./components/NewSongs";

function App() {
  // define backend url base------------------------------------
  //const url = "https://mern1207-group.herokuapp.com";
  const url = "https://tunrapi-rails.herokuapp.com";

  // Defines STATES------------------------------------
  const [playlist, setPlaylist] = useState([]);

  const [selectSong, setSelectSong] = useState([]);

  const addSong = (newSong) => {
    setSelectSong([...selectSong, newSong]);
    console.log("Song Selected: ", newSong);
  };

  const deleteFromFave = (currentSong) => {
    selectSong.splice(selectSong.indexOf(currentSong), 1);

    setSelectSong([...selectSong]);

    console.log("You are deleting: ", currentSong);
  };


  // CRUD ROUTES------------------------------------
  // GET - INDEX---
  const getSongs = () => {
    axios.get(url + "/songs").then((res) => {
      const songs = res.data;
      setPlaylist(songs);
    });
  };
  useEffect(() => {
    getSongs();
  }, []);

  // CREATE - ADD A SONG VIA FORM----
  const handleCreateSong = (newSong) => {
    axios
      .post(url + "/songs", newSong)
      .then((res) => {
        setPlaylist(...playlist, newSong);
      })
      .then(() => getSongs());
  };

  const deleteSong = (currentSong) => {
    const id = currentSong.id;

    fetch(url + "/songs/" + id, {
      method: "delete",
    }).then(() => {
      getSongs();
    });

    console.log("You are deleting: ", currentSong);
  };

  const updateSong = (currentSong) => {
    // axios
    //   .put(url + "/songs", currentSong)
    //   .then((res) => {
    //     setPlaylist(...playlist, currentSong);
    //   })
    //   .then(() => getSongs());
    console.log("You are Updating: ", currentSong);
  };

  return (
    <div className="App">
      <Titlebar />
    
      <Playlist
        playlist={playlist} //Pass Down playlist state into playlist comp
        handleSubmit={addSong}
        deleteSong={deleteSong}
        updateSong={updateSong}
      />

      <FavSong selectSong={selectSong} deleteSong={deleteFromFave} />

      <NewSongs create={handleCreateSong} />
    </div>
  );
}

export default App;

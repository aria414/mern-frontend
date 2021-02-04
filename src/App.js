import "./App.css";
// REACT IMPORTS--------------------------------------
import React, {useState, useEffect} from 'react'
// AXIOS IMPORTIMPORTS--------------------------------------
import axios from 'axios'
// COMPONENT IMPORTS ---------------------------------
import Titlebar from "./components/TopBar";
import Playlist from "./components/Playlist";
import FavSong from "./components/FavoriteSongs";
import NewSongs from "./components/NewSongs";

function App() {
<<<<<<< HEAD
=======
  // define backend url base------------------------------------
  const url = "https://mern1207-group.herokuapp.com"
  // Defines STATES------------------------------------
  const [playlist, setPlaylist] = useState([])

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
    axios.post(url +'/songs', newSong)
    .then((res) => {
      setPlaylist(...playlist, newSong);
    })
    .then(() => getSongs());
  };
>>>>>>> ac99ef8524b216a8b31156a77ef11ee093560c11
  
  return (
    <div className="App">
      <Titlebar />
      <Playlist 
        playlist={playlist} //Pass Down playlist state into playlist comp
      />
      <FavSong />
      <NewSongs />
    </div>
  );
}

export default App;

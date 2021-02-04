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

  // define backend url base------------------------------------
  const url = "https://mern1207-group.herokuapp.com"
  // Defines STATES------------------------------------
  const [playlist, setPlaylist] = useState([])
  const [selectedSong, setSelectedSong] = useState("")
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
  // DESTROY ---
  
  const deleteSong = (song)=>{
    console.log("this is song",song)
      axios.delete(url + '/songs/' + song._id)
      .then((res)=>{getSongs()})
    }

  return (
    <div className="App">
      <Titlebar />
      <div className="playlist-name">
        <h2> Playlist 1</h2>
      </div>
      <Playlist 
        playlist={playlist} //Pass Down playlist state into playlist comp
        deleteSong = {deleteSong}

      />
      <FavSong />
      <NewSongs playlist={playlist} create={handleCreateSong} />
    </div>
  );
}

export default App;

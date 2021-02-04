import "./App.css";
import Titlebar from "./components/TopBar";
import Playlist from "./components/Playlist";
import FavSong from "./components/FavoriteSongs";
import NewSongs from "./components/NewSongs";
function App() {
  return (
    <div className="App">
      <Titlebar />
      <Playlist />
      <FavSong />
      <NewSongs />
    </div>
  );
}

export default App;

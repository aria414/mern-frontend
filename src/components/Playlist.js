import React from "react";

const Playlist = (props) => {
  const { playlist } = props;

  //console.log("PLAYLIST props: ", playlist);

  const handleAdd = (songSelected) => {
    props.handleSubmit(songSelected);
  };

  const handleDelete = (songSelected) => {
    props.deleteSong(songSelected);
  };

  const handleUpdate = (songSelected) => {
    props.updateSong(songSelected);
  };

  const loaded = () => {
    return (
      <div className="playlist-name">
        <h2> Playlist 1</h2>

        <div className="all-songs" key={Playlist._id}>
          {playlist.map((song) => {
            return (
              <div className="song-details">
                <p>Title: {song.title}</p>
                <p>Artist: {song.artist} </p>
                <p>Time: {song.time}</p>
                <button onClick={() => handleAdd(song)}>Add to Fave</button>
                <button onClick={() => handleDelete(song)}>Delete Song</button>
                {/*<button onClick={() => handleUpdate(song)}>Update Song</button>*/}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  const loading = <h2>What are you Listening to?</h2>;

  return playlist.length > 0 ? loaded() : loading;
};

export default Playlist;

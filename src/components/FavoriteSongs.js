import React, { useState } from "react";

const FavSong = (props) => {
  const { selectSong } = props;

  console.log("ALl the props in Fave Song: ", selectSong);

  const handleDelete = (songSelected) => {
    props.deleteSong(songSelected);
  };

  const loaded = () => {
    const newSong = selectSong.map((song, index) => {
      return (
        <div className="song-details">
          <p>Title: {song.title}</p>
          <p>Artist: {song.artist} </p>
          <p>Time: {song.time}</p>
          <button onClick={() => handleDelete(song)}>Delete Song</button>
        </div>
      );
    });
    return (
      <div>
        <div>
          <h2>Favorite Songs List</h2>
        </div>

        <div>{newSong}</div>
      </div>
    );
  };
  const loading = () => {
    return <h2>Haven't Faved a Song Yet...</h2>;
  };
  return selectSong.length > 0 ? loaded() : loading();
};

export default FavSong;

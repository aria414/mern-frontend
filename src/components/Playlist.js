import React from "react";

const Playlist = (props) => {
  const { playlist } = props;
  const loaded = () => {
    return (
      <div key={Playlist._id}>
        {playlist.map((song) => {
          return (
            <article>
              <div className="playlist-name">
                <h2> Playlist 1</h2>
              </div>

              <div className="song-name">
                <p>{song.title}</p>
              </div>

              <div className="artist-name">
                <p> {song.artist} </p>
              </div>

              <div className="song-length">
                <p> {song.time}</p>
              </div>
            </article>
          );
        })}
      </div>
    );
  };
  const loading = <h6>What are you Listening to?</h6>;

  return playlist.length >0 ? loaded(): loading;
};

export default Playlist;

// src/components/Playlist.js
import React from 'react';

const Playlist = ({ songs, onSelectSong }) => {
    return (
      <div className='playOption'>
        <h2>Playlist</h2>
        <div className='plyOption'>
          {songs.map((song, index) => (
            <button key={index} onClick={() => onSelectSong(song.url, song.title)}>
              {song.title}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
export default Playlist;

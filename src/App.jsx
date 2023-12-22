import React, { useState,useEffect} from 'react';
import "./App.css"
import Player from './Player';
import Playlist from './Playlist';

const App = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [currentSongTitle, setCurrentSongTitle] = useState('');

  const songs = [
    { title: 'Video-playlist', url: 'https://www.youtube.com/watch?v=CPm5nZgzNr8&list=PLKCo4y0JbV2ZrcJeKQgSWg_93QYAAjpCX' },
    { title: "Audio-playlist", url: "https://www.youtube.com/watch?v=atVof3pjT-I&list=PL9bw4S5ePsEGpT9PdWJYN8joMa2eWAxJf"},
    // Add more songs as needed
  ];

  useEffect(() => {
    const storedSong = localStorage.getItem('selectedSong');
    if (storedSong) {
      const { url, title } = JSON.parse(storedSong);
      setCurrentSong(url);
      setCurrentSongTitle(title);
    }
  }, []);


  useEffect(() => {
    if (currentSong) {
      const songData = { url: currentSong, title: currentSongTitle };
      localStorage.setItem('selectedSong', JSON.stringify(songData));
    }
  }, [currentSong, currentSongTitle]);

  
  const onSelectSong = (url, title) => {
    setCurrentSong(url);
    setCurrentSongTitle(title);
  };

  return (
    <>    
    <div className='box'>
      <div className='flex'>
       <Player url={currentSong} title={currentSongTitle} />
      </div>
      <div>
       <Playlist songs={songs} onSelectSong={onSelectSong} />
      </div>
    </div>
    </>

  );
};

export default App;

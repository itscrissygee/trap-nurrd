import React from "react";

const SpotifyBanner = () => {
  return (
    <div className="bg-green-600 text-white text-center py-2">
      <a
        href="https://open.spotify.com/artist/0meAAW0DZi0q7Eb8JakChr?si=gfj4xsj9SGCXpwsVYV6R5w"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline">
        🎵 Listen to Poor Man's Republic on Spotify 🎵
      </a>
    </div>
  );
};

export default SpotifyBanner;

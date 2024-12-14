const SpotifyBanner = () => {
  return (
    <div className="bg-green-600 text-white p-2">
      <div className="max-w-6xl mx-auto flex justify-center items-center space-x-4">
        <span className="font-bold">Listen While You Design!</span>
        <a
          href="https://open.spotify.com/playlist/yourplaylistid"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-200">
          Open Trap Nurrd Playlist
        </a>
      </div>
    </div>
  );
};

export default SpotifyBanner;

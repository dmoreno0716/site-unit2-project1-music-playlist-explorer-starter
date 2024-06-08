
function randomPlaylist(){
    let displayPlaylist = document.querySelector("#playlist-display")
    let displaySongs = document.querySelector("#song-display")
    let randomizer = Math.floor(Math.random() * data.playlists.length)
    console.log(randomizer);
    //randomly select a playlist
    const random_list = () => {
        return data.playlists[randomizer]

    }
    playlist = random_list();
    //display the random playlist and songs
    displayPlaylist.innerHTML = `
    <div class = "playlist-holder"></div>
        <img id = "featuredArtwork" src ="${playlist.playlist_art}"></img>
        <div>${playlist.playlist_name}</div>
        <div>${playlist.playlist_creator}</div> `;

    // displaySongs.innerHTML = `
    // <div class = "songs-holder"></div>
    //     <div>${playlist.songs[0].title}</div>
    //     <div>${playlist.songs[0].artist}</div>
    //     <div>${playlist.songs[0].album}</div>
    //     <div>${playlist.songs[0].duration}</div>`;

    var display = document.createElement("ul")

    data.playlists.forEach((songs) =>{
        displaySongs.innerHTML = `
         <div class = "songs-holder"></div>
             <div>${songs.title}</div>
             <div>${songs.artist}</div>
             <div>${playlist.songs.album}</div>
          <div>${playlist.songs.duration}</div>`;


    })


 }

 randomPlaylist();




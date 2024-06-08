

//ON LOAD, DISPLAYING ALL PLAYLISTS
document.addEventListener("DOMContentLoaded", () => {
    const playlistContainer = document.querySelector("main");
 
    data.playlists.forEach((playlist) => {
      const card = document.createElement("div");
      card.classList.add("container");
      card.setAttribute("data-playlist-id", playlist.playlistID.toString());
      card.innerHTML = `<img class = "art" src = "${playlist.playlist_art}"></img>
        <div class = "cards" ></div>
           <label ${playlist.playlistID}></label>
           <h3>${playlist.playlist_name}</h3>
           <p>${playlist.playlist_creator}</p>
           <span class="heart" id="heart${playlist.playlistID}" onclick="likePlaylist(${playlist.playlistID})">&#9825;</span>
           <span id="counter${playlist.playlistID}">${playlist.likeCount}</span>
           <span id = "trash">&#128465;</span>`;
 
      playlistContainer.appendChild(card);
      card.onclick = function () {
        openModal(playlist);
      };
    });
  });
 
 
 
  // MODAL 
  const modalBody = document.querySelector("#modal-body");
  var modal = document.getElementById("songsModal");
 
  function openModal(_playlist) {
    console.log("Opening Modal with Playlist: ");
    console.log(_playlist);
    modal.style.display = "block";
 
    let mHead = document.querySelector("#modal-header");
    mHead.innerHTML = `<div id="modal-header">
    <img class="modal-header-image" src="${_playlist.playlist_art}" />
    <div class="modal-header-details">
      <h2>${_playlist.playlist_name}</h2>
      <h3>${_playlist.playlist_creator}</h3>
      <button id="shuffle" type="button">Shuffle</button>
    </div>
  </div>
        `;
 
    let shuffleButton = document.querySelector("#shuffle");
    shuffleButton.onclick = function () {
      shufflePlaylist(_playlist.songs, modalBody);
    };
 
    let mBody = document.querySelector("#modal-body");
    mBody.innerHTML = "";
 
    addSongs(_playlist.songs, modalBody);
  }
 
  //THIS IS TO ADD SONGS
  const addSongs = (songs, modalBody) => {
    const songList = document.createElement("ul");
    songList.classList.add("no-bullets");
    songs.forEach((song) => {
      const songItem = document.createElement("li");
      songItem.innerHTML = `<div class="song-item">
      <div class="song-item-container">
        <div class="song-item-details">
          <img id = "song-img" width="120px" height="80px" src="${song.cover_art}" />
          <div class="song-item-info">
            <div id = "song-title">${song.title}</div>
            <div id = "song-artist">${song.artist}</div>
            <div id = "song-album">${song.album}</div>
          </div>
        </div>
        <div id = "song-length"><h2>${song.duration}</h2></div>
      </div>
    </div>`;
      songList.appendChild(songItem);
    });
    modalBody.appendChild(songList);
  };
 
 //SHUFFLE
 
  function shufflePlaylist(songs, modalBody) {
    modalBody.innerHTML = "";
    let shuffledSongs = [...songs]; //Making a copy of the songs to shuffle
    shuffledSongs.sort(() => Math.random() - 0.5); //Shuffling the songs by using a random comparison function
 
    const songList = document.createElement("ul");
    songList.classList.add("no-bullets");
    shuffledSongs.forEach((song) => {
      const songItem = document.createElement("li");
      songItem.innerHTML = `<div class="song-item">
      <div class="song-item-container">
        <div class="song-item-details">
          <img width="120px" height="80px" src="${song.cover_art}" />
          <div class="song-item-info">
            <div>${song.title}</div>
            <div>${song.artist}</div>
            <div>${song.album}</div>
          </div>
        </div>
        <div><h2>${song.duration}</h2></div>
      </div>
    </div>`;
      songList.appendChild(songItem);
    });
    modalBody.appendChild(songList);
  }
 
 
  //CLICK OFF MODAL
  window.onclick = function (event) {
    //If they click the "modal" which is the darkened part then it activates the if-statement :D
    if (event.target == modal) {
      console.log("Closing Modal.");
      modal.style.display = "none";
      let mHead = document.querySelector("#modal-header");
      mHead.innerHTML = "";
      let mBody = document.querySelector("#modal-body");
      mBody.innerHTML = "";
    }
  };
 
  //LIKE FUNCTION
 
  function likePlaylist(_playlistID) {
    let heartIcon = document.querySelector("#heart" + _playlistID);
    let heartCounter = document.querySelector("#counter" + _playlistID);
 
    if (heartIcon.classList.contains("likedHeart")) {
      heartIcon.classList.remove("likedHeart");
      heartCounter.innerHTML = Number(heartCounter.innerHTML) - 1;
    } else {
      heartIcon.classList.add("likedHeart");
      heartCounter.innerHTML = Number(heartCounter.innerHTML) + 1;
    }
 
    heartIcon.addEventListener("click", (event) =>{
          event.stopPropagation();
       })
 
    // const parentElement = checkbox.closest()
    // const likeCountElement = parentElement.querySelector()
 
    // checkbox.addEventListener('change', () =>{
    //    let likeCount = parseInt(likeCountElement.textContent);
 
    //    likeCount = checkbox.checked ? likeCount + 1 : likeCount - 1
    //    likeCountElement.textContent = likeCount;
 
    //    if(checkbox.checked){
    //       checkbox.nextElementSibling.style.color = "red";
 
    //    }
    //    else{
    //       checkbox.nextElementSibling.style.color = "black";
    //    }
    // })
 
  }
// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
    // Additional songs
    { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },
    { title: "Smooth Criminal", artist: "Michael Jackson", genre: "Pop" },
    { title: "Stairway to Heaven", artist: "Led Zeppelin", genre: "Rock" },
    { title: "Respect", artist: "Aretha Franklin", genre: "R&B" },
    { title: "Hotel California", artist: "Eagles", genre: "Rock" },
    { title: "Superstition", artist: "Stevie Wonder", genre: "Funk" },
    { title: "Give Up the Funk (Tear the Roof off the Sucker)", artist: "Parliament", genre: "Funk" },
    { title: "Brick House", artist: "Commodores", genre: "Funk" },
    { title: "Play That Funky Music", artist: "Wild Cherry", genre: "Funk" },
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    // Add preferences for Drax, Rocket, and Groot
    "Drax" : "R&B",
    "Rocket" : "Pop",
    "Groot" : "Funk"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    return Object.keys(guardians).map(guardian => {
        const preferredGenre = guardians[guardian];
        const playlist = songs.filter(song => song.genre === preferredGenre);
        return { guardian, playlist }; // Return an object containing the guardian's name and playlist
    });
}

// Function to display playlists in HTML
function displayPlaylists(playlists) {
    const playlistContainer = document.getElementById('playlists');

    playlists.forEach(entry => {
        const guardian = entry.guardian;
        const playlist = entry.playlist;

        const playlistElement = document.createElement('div');
        playlistElement.classList.add('playlist');

        const heading = document.createElement('h2');
        heading.textContent = `${guardian}'s Playlist`;
        playlistElement.appendChild(heading);

        const songList = document.createElement('ul');
        playlist.forEach(song => {
            const songItem = document.createElement('li');
            
            const songTitle = document.createElement('span');
            songTitle.textContent = `${song.title}`; // Display title
            songTitle.classList.add('song-title');
            songTitle.style.color = 'orange'; // Set color to orange
            songTitle.style.textDecoration = 'underline'; // Add underline effect
            songItem.appendChild(songTitle);

            //Create a span for the artist
            const artistSpan = document.createElement('span');
            artistSpan.textContent = ` by ${song.artist}`; //Display artist
            songItem.appendChild(artistSpan);

            songList.appendChild(songItem);

            // Add hover effect using JavaScript to the song title span
            songTitle.addEventListener('mouseover', function() {
                songTitle.style.textDecoration = 'none'; // Remove underline on hover
                songTitle.style.color = '#00FF00'; // Change color on hover
            });

            songTitle.addEventListener('mouseout', function() {
                songTitle.style.textDecoration = 'underline'; // Restore underline when not hovering
                songTitle.style.color = 'orange'; // Restore color when not hovering
            });

        });

        playlistElement.appendChild(songList);
        playlistContainer.appendChild(playlistElement);
    });
}


// Call generatePlaylist and display the playlists for each Guardian
const playlists = generatePlaylist(guardians, songs);
displayPlaylists(playlists);




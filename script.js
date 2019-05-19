var genreArray = pop;

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
    
    const genreSelect = document.querySelector('#genre-select');

    genreSelect.addEventListener('change', (event) => {
        genreArray = setSong(event);
        displaySongs();
    });

    displaySongs();
});

function setSong(event) {
    switch (event.target.value) {
        case "1":
            return pop;
        default:
            return pop;
    }
}

function displaySongs() {
    [song1, song2, song3, song4] = genreArray;
    console.log(song1['name']);
}


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
    document.querySelector('#song-title1').textContent = song1.name;
    document.querySelector('#song-title2').textContent = song2.name;
    document.querySelector('#song-title3').textContent = song3.name;
    document.querySelector('#song-title4').textContent = song4.name;
    
    let viz1 = new mm.Visualizer(song1, document.getElementById('canvas1'));
    let viz2 = new mm.Visualizer(song2, document.getElementById('canvas2'));
    let viz3 = new mm.Visualizer(song3, document.getElementById('canvas3'));
    let viz4 = new mm.Visualizer(song4, document.getElementById('canvas4'));

    let vizPlayer1 = new mm.Player(false, {
        run: (note) => viz1.redraw(note),
        stop: () => {}
    });
    let vizPlayer2 = new mm.Player(false, {
        run: (note) => viz2.redraw(note),
        stop: () => {}
    });
    let vizPlayer3 = new mm.Player(false, {
        run: (note) => viz3.redraw(note),
        stop: () => {}
    });
    let vizPlayer4 = new mm.Player(false, {
        run: (note) => viz4.redraw(note),
        stop: () => {}
    });

    let vizBtn1 = document.querySelector('#viz-btn1');
    let vizBtn2 = document.querySelector('#viz-btn2');
    let vizBtn3 = document.querySelector('#viz-btn3');
    let vizBtn4 = document.querySelector('#viz-btn4');

    vizBtn1.addEventListener('click', function() {
        if (vizPlayer1.isPlaying()) {
            vizPlayer1.stop();
            vizBtn1.textContent = 'Play';
            return;
        }

        vizBtn1.textContent = 'Stop';
        vizPlayer1.start(song1)
        .then(() => vizBtn1.textContent = 'Play');
    });
    vizBtn2.addEventListener('click', function () {
        if (vizPlayer2.isPlaying()) {
            vizPlayer2.stop();
            vizBtn2.textContent = 'Play';
            return;
        }

        vizBtn2.textContent = 'Stop';
        vizPlayer2.start(song2)
        .then(() => vizBtn2.textContent = 'Play');
    });
    vizBtn3.addEventListener('click', function() {
        if (vizPlayer3.isPlaying()) {
            vizPlayer3.stop();
            vizBtn3.textContent = 'Play';
            return;
        }
    
        vizBtn3.textContent = 'Stop';
        vizPlayer3.start(song3)
        .then(() => vizBtn3.textContent = 'Play');
    });
    vizBtn4.addEventListener('click', function() {
        if (vizPlayer4.isPlaying()) {
            vizPlayer4.stop();
            vizBtn4.textContent = 'Play';
            return;
        }
    
        vizBtn4.textContent = 'Stop';
        vizPlayer4.start(song4)
        .then(() => vizBtn4.textContent = 'Play');
    });
}


player1 = new mm.SoundFontPlayer('https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus');

let playingNoteSequenceBtn;

document.addEventListener("DOMContentLoaded", function(){
    playingNoteSequenceBtn = document.querySelector('#playing-notesequence-btn');

    document.querySelector('#playing-notesequence-btn').addEventListener('click', function() {
        if (player1.isPlaying()) {
            player1.stop();
            playingNoteSequenceBtn.textContent = 'Play NoteSquence';
            return;
        }

        playingNoteSequenceBtn.textContent = 'Stop NoteSquence';
        player1.start(song)
            .then(() =>
                playingNoteSequenceBtn.textContent = 'Play NoteSquence'
            );
    });
});

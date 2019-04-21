player1 = new mm.SoundFontPlayer('https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus');

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('#playing-notesequence-btn').addEventListener('click', function() {
        if (player1.isPlaying()) {
            player1.stop();
            document.querySelector('#playing-notesequence-btn').textContent = 'Play NoteSquence';
            return;
        }

        document.querySelector('#playing-notesequence-btn').textContent = 'Stop NoteSquence';
        player1.start(song)
            .then(() =>
                document.querySelector('#playing-notesequence-btn').textContent = 'Play NoteSquence'
            );
    });
});

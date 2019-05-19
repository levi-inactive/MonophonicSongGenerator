music_vae = new mm.MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/mel_16bar_small_q2');
music_vae.initialize();

vaePlayer = new mm.SoundFontPlayer('https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus');

let musicVAEInterpolatingBtn;
let vaeStatus;

function playInterpolation() {
    if(vaePlayer.isPlaying()) {
        vaePlayer.stop();
        musicVAEInterpolatingBtn.textContent = 'Interpolate NoteSequences';
        vaeStatus.textContent = 'Halt';
        return;
    }

    musicVAEInterpolatingBtn.textContent = 'Stop NoteSequences';
    vaeStatus.textContent = 'Awaiting for VAE response...';

    const songsArray = genreArray;

    for (let i = 0; i < songsArray.length; i++) {
        songsArray[i] = mm.sequences.quantizeNoteSequence(songsArray[i], 4);
    }

    music_vae
        .interpolate(genreArray, 5)
        .then((sample) => {
            vaeStatus.textContent = 'Playing VAE response';
            // TODO: How is sample represented when it gets an array as input?
            vaePlayer.start(sample[2])
                .then(() => {
                    musicVAEInterpolatingBtn.textContent = 'Interpolate NoteSequences';
                    vaeStatus.textContent = 'Halt';
                });
        });
}

document.addEventListener("DOMContentLoaded", function(){
    musicVAEInterpolatingBtn = document.querySelector('#music-vae-interpolating-btn');
    vaeStatus = document.querySelector('#vae-status');

    musicVAEInterpolatingBtn.addEventListener('click', playInterpolation);
});
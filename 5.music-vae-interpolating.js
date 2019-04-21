/**
 * Reuses music_vae and vaePlayer from 4.music-vae-creating.js
 */

let musicVAEInterpolatingBtn;
let vae2Status;

function playInterpolation() {
    if(vaePlayer.isPlaying()) {
        vaePlayer.stop();
        musicVAEInterpolatingBtn.textContent = 'Interpolate NoteSequences';
        vae2Status.textContent = 'Halt';
        return;
    }

    musicVAEInterpolatingBtn.textContent = 'Stop NoteSequences';
    vae2Status.textContent = 'Awaiting for VAE response...';

    const from = mm.sequences.quantizeNoteSequence(fromSong, 4);
    const to = mm.sequences.quantizeNoteSequence(toSong, 4);

    music_vae
        .interpolate([from, to], 5)
        .then((sample) => {
            vae2Status.textContent = 'Playing VAE response';
            vaePlayer.start(sample[2])
                .then(() => {
                    musicVAEInterpolatingBtn.textContent = 'Interpolate NoteSequences';
                    vae2Status.textContent = 'Halt';
                });
        });
}

document.addEventListener("DOMContentLoaded", function(){
    musicVAEInterpolatingBtn = document.querySelector('#music-vae-interpolating-btn');
    vae2Status = document.querySelector('#vae2-status');

    musicVAEInterpolatingBtn.addEventListener('click', playInterpolation);
});
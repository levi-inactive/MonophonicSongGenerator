/**
 * Reuses music_vae and vaePlayer from 4.music-vae-creating.js
 */

function playInterpolation() {
    if(vaePlayer.isPlaying()) {
        vaePlayer.stop();
        document.querySelector('#music-vae-interpolating-btn').textContent = 'Interpolate NoteSequences';
        document.querySelector('#vae2-status').textContent = 'Halt';
        return;
    }

    document.querySelector('#music-vae-interpolating-btn').textContent = 'Stop NoteSequences';
    document.querySelector('#vae2-status').textContent = 'Awaiting for VAE response...';

    const from = mm.sequences.quantizeNoteSequence(fromSong, 4);
    const to = mm.sequences.quantizeNoteSequence(toSong, 4);

    music_vae
        .interpolate([from, to], 5)
        .then((sample) => {
            document.querySelector('#vae2-status').textContent = 'Playing VAE response';
            vaePlayer.start(sample[2])
                .then(() => {
                    document.querySelector('#music-vae-interpolating-btn').textContent = 'Interpolate NoteSequences';
                    document.querySelector('#vae2-status').textContent = 'Halt';
                });
        });
}

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('#music-vae-interpolating-btn').addEventListener('click', playInterpolation);
});
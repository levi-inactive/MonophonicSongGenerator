music_vae = new mm.MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/mel_16bar_small_q2');
music_vae.initialize();

vaePlayer = new mm.SoundFontPlayer('https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus');

function playVAE() {
    if(vaePlayer.isPlaying()) {
        vaePlayer.stop();
        document.querySelector('#music-vae-creating-btn').textContent = 'Create NoteSequence';
        return;
    }

    vae_temperature = parseFloat(document.querySelector('#vae-temperature').value);

    document.querySelector('#music-vae-creating-btn').textContent = 'Stop NoteSequence'

    music_vae
        .sample(1, vae_temperature)
        .then((sample) => vaePlayer.start(sample[0]))
        .then(() => document.querySelector('#music-vae-creating-btn').textContent = 'Create NoteSequence');
}

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('#music-vae-creating-btn').addEventListener('click', playVAE);
});
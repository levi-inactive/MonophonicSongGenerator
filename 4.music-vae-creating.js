music_vae = new mm.MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/mel_16bar_small_q2');
music_vae.initialize();

vaePlayer = new mm.SoundFontPlayer('https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus');

function playVAE() {
    if(vaePlayer.isPlaying()) {
        vaePlayer.stop();
        document.querySelector('#music-vae-creating-btn').textContent = 'Create NoteSequence';
        document.querySelector('#vae1-status').textContent = 'Halt';
        return;
    }

    vae_temperature = parseFloat(document.querySelector('#vae-temperature').value);

    document.querySelector('#music-vae-creating-btn').textContent = 'Stop NoteSequence'
    document.querySelector('#vae1-status').textContent = 'Awaiting for VAE response...'

    music_vae
        .sample(1, vae_temperature)
        .then((sample) => {
            document.querySelector('#vae1-status').textContent = 'Playing VAE response'
            vaePlayer.start(sample[0])
                .then(() => {
                    document.querySelector('#music-vae-creating-btn').textContent = 'Create NoteSequence';
                    document.querySelector('#vae1-status').textContent = 'Halt'
                });
        })
        .then(() => {
            
        });
}

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('#music-vae-creating-btn').addEventListener('click', playVAE);
});
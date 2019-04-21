music_vae = new mm.MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/mel_16bar_small_q2');
music_vae.initialize();

vaePlayer = new mm.SoundFontPlayer('https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus');

let musicVAECreatingBtn;
let vae1Status;

function playVAE() {
    if(vaePlayer.isPlaying()) {
        vaePlayer.stop();
        musicVAECreatingBtn.textContent = 'Create NoteSequence';
        vae1Status.textContent = 'Halt';
        return;
    }

    vae_temperature = parseFloat(document.querySelector('#vae-temperature').value);

    musicVAECreatingBtn.textContent = 'Stop NoteSequence'
    vae1Status.textContent = 'Awaiting for VAE response...'

    music_vae
        .sample(1, vae_temperature)
        .then((sample) => {
            vae1Status.textContent = 'Playing VAE response'
            vaePlayer.start(sample[0])
                .then(() => {
                    musicVAECreatingBtn.textContent = 'Create NoteSequence';
                    vae1Status.textContent = 'Halt'
                });
        })
        .then(() => {
            
        });
}

document.addEventListener("DOMContentLoaded", function(){
    musicVAECreatingBtn = document.querySelector('#music-vae-creating-btn');
    vae1Status = document.querySelector('#vae1-status')

    musicVAECreatingBtn.addEventListener('click', playVAE);
});
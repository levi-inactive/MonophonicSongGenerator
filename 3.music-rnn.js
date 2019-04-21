music_rnn = new mm.MusicRNN('https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/basic_rnn');
music_rnn.initialize();

rnnPlayer = new mm.SoundFontPlayer('https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus');

function playRNN() {
    if (rnnPlayer.isPlaying()) {
        rnnPlayer.stop();
        document.querySelector('#music-rnn-btn').textContent = 'Continue NoteSequence';
        document.querySelector('#rnn-status').textContent = 'Halt';
        return;
    }
    
    document.querySelector('#music-rnn-btn').textContent = 'Stop NoteSequence';
    document.querySelector('#rnn-status').textContent = 'Playing original song';

    rnn_temperature = parseFloat(document.querySelector('#rnn-temperature').value);
    rnn_steps = parseFloat(document.querySelector('#rnn-steps').value);

    const qns = mm.sequences.quantizeNoteSequence(TWINKLE_TWINKLE, 4);
    rnnPlayer.start(TWINKLE_TWINKLE)
        .then(() => {
            music_rnn
                .continueSequence(qns, rnn_steps, rnn_temperature)
                .then((sample) => {
                    document.querySelector('#rnn-status').textContent = 'Playing RNN response';
                    rnnPlayer.start(sample)
                        .then(() => {
                            document.querySelector('#rnn-status').textContent = 'Halt';
                            document.querySelector('#music-rnn-btn').textContent = 'Continue NoteSequence';
                        });
                })
        });
    
}

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('#music-rnn-btn').addEventListener('click', playRNN);
});

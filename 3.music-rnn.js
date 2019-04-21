music_rnn = new mm.MusicRNN('https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/basic_rnn');
music_rnn.initialize();

rnnPlayer = new mm.SoundFontPlayer('https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus');

let musicRNNBtn;
let rnnStatus;

function playRNN() {
    if (rnnPlayer.isPlaying()) {
        rnnPlayer.stop();
        musicRNNBtn.textContent = 'Continue NoteSequence';
        rnnStatus.textContent = 'Halt';
        return;
    }
    
    musicRNNBtn.textContent = 'Stop NoteSequence';
    rnnStatus.textContent = 'Playing original song';

    rnn_temperature = parseFloat(document.querySelector('#rnn-temperature').value);
    rnn_steps = parseFloat(document.querySelector('#rnn-steps').value);

    let qns = song;

    if (song !==  LITTLE_TEAPOT) {
        qns = mm.sequences.quantizeNoteSequence(song, 4); 
    }

    rnnPlayer.start(song)
        .then(() => {
            music_rnn
                .continueSequence(qns, rnn_steps, rnn_temperature)
                .then((sample) => {
                    rnnStatus.textContent = 'Playing RNN response';
                    rnnPlayer.start(sample)
                        .then(() => {
                            rnnStatus.textContent = 'Halt';
                            musicRNNBtn.textContent = 'Continue NoteSequence';
                        });
                })
        });
    
}

document.addEventListener("DOMContentLoaded", function(){
    musicRNNBtn = document.querySelector('#music-rnn-btn');
    rnnStatus = document.querySelector('#rnn-status');

    musicRNNBtn.addEventListener('click', playRNN);
});

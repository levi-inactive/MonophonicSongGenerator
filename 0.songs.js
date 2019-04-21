TWINKLE_TWINKLE = {
    notes: [
        {pitch: 60, startTime: 0.0, endTime: 0.5},
        {pitch: 60, startTime: 0.5, endTime: 1.0},
        {pitch: 67, startTime: 1.0, endTime: 1.5},
        {pitch: 67, startTime: 1.5, endTime: 2.0},
        {pitch: 69, startTime: 2.0, endTime: 2.5},
        {pitch: 69, startTime: 2.5, endTime: 3.0},
        {pitch: 67, startTime: 3.0, endTime: 4.0},
        {pitch: 65, startTime: 4.0, endTime: 4.5},
        {pitch: 65, startTime: 4.5, endTime: 5.0},
        {pitch: 64, startTime: 5.0, endTime: 5.5},
        {pitch: 64, startTime: 5.5, endTime: 6.0},
        {pitch: 62, startTime: 6.0, endTime: 6.5},
        {pitch: 62, startTime: 6.5, endTime: 7.0},
        {pitch: 60, startTime: 7.0, endTime: 8.0},  
    ],
    totalTime: 8
};

LITTLE_TEAPOT = {
    notes: [
        { pitch: 69, quantizedStartStep: 0, quantizedEndStep: 2, program: 0 },
        { pitch: 71, quantizedStartStep: 2, quantizedEndStep: 4, program: 0 },
        { pitch: 73, quantizedStartStep: 4, quantizedEndStep: 6, program: 0 },
        { pitch: 74, quantizedStartStep: 6, quantizedEndStep: 8, program: 0 },
        { pitch: 76, quantizedStartStep: 8, quantizedEndStep: 10, program: 0 },
        { pitch: 81, quantizedStartStep: 12, quantizedEndStep: 16, program: 0 },
        { pitch: 78, quantizedStartStep: 16, quantizedEndStep: 20, program: 0 },
        { pitch: 81, quantizedStartStep: 20, quantizedEndStep: 24, program: 0 },
        { pitch: 76, quantizedStartStep: 24, quantizedEndStep: 32, program: 0 }
    ],
    quantizationInfo: { stepsPerQuarter: 4 },
    totalQuantizedSteps: 32,
};

MARRIED_LIFE = {
    notes: [
        {pitch: 65, startTime: 0.0, endTime: 0.5},  //fa
        {pitch: 69, startTime: 0.5, endTime: 1.0},  //la
        {pitch: 65, startTime: 1.0, endTime: 1.5},  //Fa
        {pitch: 64, startTime: 1.5, endTime: 2.5},  //Mi 
        {pitch: 65, startTime: 3.0, endTime: 3.5},  //Fa
        {pitch: 69, startTime: 3.5, endTime: 4.0},  //La
        {pitch: 64, startTime: 4.0, endTime: 4.5},  //Mi
        {pitch: 62, startTime: 4.5, endTime: 5.5}   //Re
    ],
    totalTime: 6
};

song = TWINKLE_TWINKLE;
fromSong = TWINKLE_TWINKLE;
toSong = TWINKLE_TWINKLE;

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
    
    const selectElement = document.querySelector('.song-radio-opt');
    const vae2SelectFrom = document.querySelector('.vae2-select-from');
    const vae2SelectTo = document.querySelector('.vae2-select-to');

    selectElement.addEventListener('change', (event) => {
        song = setSong(event);
        viz = new mm.Visualizer(song, document.getElementById('canvas'));
    });

    vae2SelectFrom.addEventListener('change', (event) => {
        fromSong = setSong(event);
    })

    vae2SelectTo.addEventListener('change', (event) => {
        toSong = setSong(event)
    })

});

function setSong(event) {
    switch (event.target.value) {
        case "1":
            return TWINKLE_TWINKLE;
        case "3":
            return LITTLE_TEAPOT;
        case "4":
            return MARRIED_LIFE;
        default:
            return TWINKLE_TWINKLE;
    }
}

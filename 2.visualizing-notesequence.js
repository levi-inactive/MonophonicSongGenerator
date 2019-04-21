let visualizingNoteSequenceBtn;

document.addEventListener("DOMContentLoaded", function(){
    visualizingNoteSequenceBtn = document.querySelector('#visualizing-notesequence-btn');

    viz = new mm.Visualizer(song, document.getElementById('canvas'));

    vizPlayer = new mm.Player(false, {
        run: (note) => viz.redraw(note),
        stop: () => {}
    });

    visualizingNoteSequenceBtn.addEventListener('click', function() {
        if (vizPlayer.isPlaying()) {
            vizPlayer.stop();
            visualizingNoteSequenceBtn.textContent = 'Play NoteSequence';
            return;
        }

        visualizingNoteSequenceBtn.textContent = 'Stop NoteSequence';
        vizPlayer.start(song)
            .then(
                () => visualizingNoteSequenceBtn.textContent = 'Play NoteSequence'
            );
    });
});

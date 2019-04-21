document.addEventListener("DOMContentLoaded", function(){
    viz = new mm.Visualizer(song, document.getElementById('canvas'));

    vizPlayer = new mm.Player(false, {
        run: (note) => viz.redraw(note),
        stop: () => {}
    });

    document.querySelector('#visualizing-notesequence-btn').addEventListener('click', function() {
        if (vizPlayer.isPlaying()) {
            vizPlayer.stop();
            document.querySelector('#visualizing-notesequence-btn').textContent = 'Play NoteSequence';
            return;
        }

        document.querySelector('#visualizing-notesequence-btn').textContent = 'Stop NoteSequence';
        vizPlayer.start(song)
            .then(
                () => document.querySelector('#visualizing-notesequence-btn').textContent = 'Play NoteSequence'
            );
    });
});

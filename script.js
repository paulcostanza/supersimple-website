const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    // JavaScript API for audio has a method of play
    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})


function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        // The API does not have a stop, so we must pause and reset
        song.pause()
        song.currentTime = 0;
    })
}
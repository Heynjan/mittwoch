class timer { // todo
    duration;
    constructor(duration) {
        this.duration = duration || 300;
        this.init() ();
    }

    init() {
        this.timerDiv = document.createElement( 'div' );
        this.timerDiv.classList.add("timer");
        document.body.appendChild(this.timerDiv)

        let count = 0;
        this.gameended = setInterval(() => {
            console.log(count);
            count++

            if (count >= this.duration) {
                console.log("game ended");
                alert('Leider verloren... trotzdem eine weitere Runde?')
                count = 0;
                location.reload()
            }
            else {
               this.timerDiv.innerHTML = `<p>${count} seconds</p>`;
            }
        }, 1000)
    }
}
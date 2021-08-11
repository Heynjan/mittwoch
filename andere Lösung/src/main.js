shooteffect = new Audio('assets/Gunfire And Voices.mp3');

class Main {

    background;
    crosshair;
    timer;
    hitcounter;
    numOfEnemies = 3;
    numOfHitedEnemies = 0;
    enemies = [];
    gameended = -1;
    winningmusik = new Audio('assets/Hero Theme.mp3');
    backgroundmusic = new Audio('assets/backgroundmusic.mp3');
    waitingmusic = new Audio('assets/waiting music.mp3');

    constructor() {
        this.init();
    }

    init() {
        this.addBackground();
        this.loadcrosshair();
        this.reset();
        this.timerstart();
        this.createHitCounter();
    }

    addBackground() {
        this.background = new Background('assets/mohrhuhnhaus2.png');
        this.background.show();
    }

    addEnemies() {
        for (let i = 0; i < this.numOfEnemies; i++) {
            this.enemies.push(new Enemy(enemy => {
                    this.hits(enemy);
                },
                'assets/mohrhuhn.png'));
        }
        console.log(this.enemies);
        this.backgroundmusic.play();
    }

    loadcrosshair(){
        this.crosshair = new Crosshair('assets/crosshair1.svg')
        this.crosshair.show();
    }

    timerstart(){
        this.timer = new timer
    }

    createHitCounter() {
        this.hitcounter = new Hitcounter();
    }

    hits(enemy) {
        this.numOfHitedEnemies++;
        this.hitcounter.init();
        console.count('hit');
        if ( this.numOfHitedEnemies !== 0 && (this.numOfHitedEnemies % 3) === 0  ) {
            this.reset();
            console.log('new chicken');
        }
        else {
            console.log('weiter spielen');
        }
        if (this.numOfHitedEnemies === 2) {
            console.log('ich habe fertig')
            this.won();
        }
    }

    reset() {
        this.enemies.forEach(enemy => enemy.removeFromStage());
        this.enemies = [];
        this.addEnemies();
        this.numOfHitedEnemies = 0;
    }

    won() {
        this.backgroundmusic.pause();
        console.log('backgroundmusic stop');
        clearInterval(this.gameended);
        this.winningmusik.play();
        console.log('winning music starts')
        alert('SUPER du hast gewonnen... noch eine runde?')
        location.reload()
    }
}
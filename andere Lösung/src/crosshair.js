//crosshair
class Crosshair {
    crosshairImg;
    crosshairDiv;
    moverHandlerRef;

    constructor(crosshairImg) {
        this.crosshairImg = crosshairImg;
        this.init ();
    }

    init() {
        this.render();

        this.start();
    }

    render() {
        this.crosshairDiv = document.createElement('div');
        this.crosshairDiv.id = 'crosshairid';
        this.crosshairDiv.classList = 'crosshair-image';
        this.crosshairDiv.innerHTML = `
            <img  src="${this.crosshairImg}" alt="crosshair">
        `;
        document.body.appendChild(this.crosshairDiv)
    }


    start() {
        this.show();
        this.moverHandlerRef = this.mouseMoveHandler.bind(this);
        document.addEventListener('mousemove', this.moverHandlerRef);
    }
    pause() {
        document.removeEventListener('mousemove', this.moverHandlerRef);
        this.hide();
    }

    mouseMoveHandler(e) {
        this.crosshairDiv.style.left = e.pageX-60 + 'px';
        this.crosshairDiv.style.top = e.pageY-60 + 'px';
    }
    hide () {
        this.crosshairDiv.style.display = 'none';
    }

    show () {
        this.crosshairDiv.style.display = 'block';
    }

}
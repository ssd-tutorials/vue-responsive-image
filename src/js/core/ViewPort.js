export default class {

    constructor() {

        this.update();

        window.addEventListener(
            'resize',
            window._.debounce(() => { this.update() }, 500)
        );

    }

    update() {

        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.media = this.breakpoint();

        window.EventHandler.fire('window-resized', this.media);

    }

    breakpoint() {

        if (this.width > 1024) {
            return 'large';
        } else if (this.width > 640) {
            return 'medium';
        } else {
            return 'small';
        }

    }

}
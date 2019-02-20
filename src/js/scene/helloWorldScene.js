export default class HelloWorldScene extends Phaser.Scene {
    create() {
      this.add.text(250, 150, 'Hello World', { fill: '#fff' });
    }
}
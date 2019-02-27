export default class StartScene extends Phaser.Scene {

  constructor() {
    super({ key: 'StartScene', active: true });

    this.loaded = false;
  }

  preload() {
    // IMPORTANT: below I load google's webfont loader
    this.load.script('https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont')

    this.load.on('progress', this.onLoadProgress, this);
    this.load.on('complete', this.onLoadComplete, this);
  }

  onLoadProgress(progress) {
    console.log("onLoadProgress");
  }

  onLoadComplete(loader, totalComplete, totalFailed) {
    console.log("onLoadComplete");
    
    WebFont.load({
      loading: () => console.log('ロード開始'),
      active: () => this.loaded = true,
      inactive: () => console.log('ロード失敗'),
      custom: {
        families: ['Nico Moji'],
        urls: ['https://fonts.googleapis.com/earlyaccess/nicomoji.css'], //I included what this should look like below
      },
    });
    console.log('completed: ', totalComplete);
    console.log('failed: ', totalFailed);
  }

  update() {
    if (this.loaded) {
      console.log("update");
      this.scene.start('HelloWorldScene');
    }
  }
}
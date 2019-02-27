export default class HelloWorldScene extends Phaser.Scene {

    constructor() {
        //!!自動実行をfalseにしておく!!
        super({ key: 'HelloWorldScene', active: false });
    }

    preload(){

      // atlasの画像読み込み
      this.load.atlas('cube', 'assets/animations/cube.png', 'assets/animations/cube.json');
      this.load.spritesheet('mummy', 'assets/animations/mummy37x45.png', { frameWidth: 37, frameHeight: 45 });
      this.load.spritesheet('miyako', 'assets/animations/miyako.png', { frameWidth: 505, frameHeight: 277 });
      
    }

    create() {

      this.touchTest();
      //this.animeTest();

    }

    touchTest(){

      // 文字表示
      // text(位置x,位置y,中身,設定)
      // setOrigin : x・yの詰め (1,1)だと右詰め・上詰め
      // setInteractive : タッチイベント用
      //let click = this.add.text(250, 150, 'Click', { fill: '#000' }).setOrigin(0.5).setInteractive();
      let click = this.add.text(this.centerX(), this.centerY() -160, 'もっとプリンをよこすの', { fontSize: '32px', fontFamily:'Nico Moji', fill: '#000' }).setOrigin(0.5);

      let count = 0;
      let countText = this.add.text(this.centerX(), this.centerY() + 150, this.countPrin(count), { fontSize: '32px', fontFamily:'Nico Moji', fill: '#000' }).setOrigin(0.5);
      
      // スプライトの設定
      let sprite = this.add.sprite(this.centerX(), this.centerY() , 'miyako').setScale(1);

      // アニメーションの設定
      let miyakoAnimation = this.anims.create({
        key: 'prin',
        frames: this.anims.generateFrameNumbers('miyako', { start: 1, end: 2 }),
        frameRate: 8,
        repeat: 1,
        onComplete: function(){ sprite.setTexture('miyako'); },
      });

      // タッチ判定（離れた際）
      this.input.on('pointerup', function(pointer, localX, localY, event){
        
        count++;

        // 文字表示
        //countText.setText(this.countPrin(count));
        // ↑ファンクションが読めない
        countText.setText('プリン ' + String(count) + ' こ');

        // アニメーションの再生
        sprite.anims.play('prin');

      })

    }

    countPrin(count){
      return 'プリン ' + String(count) + ' こ';
    }

    animeTest(){

      // アニメーションの設定
      this.anims.create({
        key: 'spin',
        frames: this.anims.generateFrameNames('cube', { prefix: 'frame', start: 0, end: 23 }),
        frameRate: 50,
        repeat: -1
      });

      // アニメーションの再生
      //this.add.sprite(100, 100, 'cube').setScale(0.1).play('spin');
      
      // アニメーションの設定
      var mummyAnimation = this.anims.create({
          key: 'walk',
          frames: this.anims.generateFrameNumbers('mummy'),
          frameRate: 16,
          repeat: 7
      });
  
      // スプライトの設定
      // var sprite = this.add.sprite(50, 300, 'mummy').setScale(0.5);
      // // アニメーションの再生
      // sprite.play('walk');

      // // tweenを使用した移動
      // this.tweens.add({
      //     targets: sprite,
      //     x: 100,
      //     duration: 1000,
      //     ease: 'Linear'
      // });

    }

    centerX ()
    {
        return this.sys.game.config.width / 2;
    }
    
    centerY ()
    {
        return this.sys.game.config.height / 2;
    }
}
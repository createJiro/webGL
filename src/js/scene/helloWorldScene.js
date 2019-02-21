export default class HelloWorldScene extends Phaser.Scene {
    create() {

      // 文字表示
      // text(位置x,位置y,中身,設定)
      // setOrigin : x・yの詰め (1,1)だと右詰め・上詰め
      // setInteractive : タッチイベント用
      var hello = this.add.text(250, 150, 'Hello World', { fill: '#fff' }).setOrigin(0.5).setInteractive();

      var hello2 = this.add.text(250, 150, '', { fill: '#fff' });

      // タッチ判定（離れた際）
      hello.on('pointerup', function(pointer, localX, localY, event){
        
        // 文字表示
        hello2.setText("Hello World2");

      })
    }
}
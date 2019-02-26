export default class HelloWorldScene extends Phaser.Scene {

    create() {

      // 文字表示
      // text(位置x,位置y,中身,設定)
      // setOrigin : x・yの詰め (1,1)だと右詰め・上詰め
      // setInteractive : タッチイベント用
      //let click = this.add.text(250, 150, 'Click', { fill: '#000' }).setOrigin(0.5).setInteractive();
      let click = this.add.text(this.centerX(), this.centerY(), 'Click', { fontFamily:'Arial', fill: '#000' }).setOrigin(0.5).setInteractive();

      let count = 0;
      let countText = this.add.text(250, 250, String(count), { fill: '#000' }).setOrigin(0.5);

      // タッチ判定（離れた際）
      click.on('pointerup', function(pointer, localX, localY, event){
        
        count++;

        // 文字表示
        countText.setText(String(count));

      })
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
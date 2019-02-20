import 'phaser';

import HelloWorldScene from './scene/helloWorldScene' // Sceneのインポート

const config = {
    width: 680,
    height: 400,
    scene: HelloWorldScene // Scene定義
};

new Phaser.Game(config);
import 'phaser';

import StartScene from './scene/StartScene' // Sceneのインポート
import HelloWorldScene from './scene/HelloWorldScene' // Sceneのインポート

//let width = window.innerWidth;
let width = 680;
//let height = window.innerHeight;
let height = 400;

const config = {
    width: width,
    height: height,
    backgroundColor: "#fff",
    scene: [StartScene, HelloWorldScene]
};

let game = new Phaser.Game(config);
import 'phaser';

import HelloWorldScene from './scene/helloWorldScene' // Sceneのインポート

//let width = window.innerWidth;
let width = 680;
//let height = window.innerHeight;
let height = 400;

const config = {
    width: width,
    height: height,
    backgroundColor: "#fff",
    scene: HelloWorldScene // Scene定義
};

let game = new Phaser.Game(config);

window.WebFontConfig = {

    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
      families: ['Revalia']
    }

};

if(typeof WebFont === 'object'){
    WebFont.load(WebFontConfig);
}
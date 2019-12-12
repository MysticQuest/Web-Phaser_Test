/* eslint-disable es5/no-block-scoping */
/* eslint-disable no-multi-spaces */
/* eslint-disable space-infix-ops */
/* eslint-disable curly */
/* eslint-disable no-lonely-if */
/* eslint-disable no-invalid-this */
/* eslint-disable comma-dangle */
/* eslint-disable lines-around-comment */
/* eslint-disable no-undef */
/* eslint-disable array-bracket-spacing */
/* eslint-disable quotes */
/* eslint-disable brace-style */
/* eslint-disable space-before-function-paren */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
// The game config that is used by Phaser


var config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

// Create a new Phaser Game object
var game = new Phaser.Game(config);

function preload() {
  this.load.plugin('DialogModalPlugin', './myPlugins/dialog.js');
  this.load.image("bg", "./assets/eforia.png");
  this.load.image("char", "./assets/bk.png");
  this.load.audio("bg_audio", "./assets/backgroundAudio.mp3");

}

function create() {
  this.add.image(700, 300, "bg");
  this.add.image(300, 300, "char");
  this.bgAudio = this.sound.add("bg_audio");
  var musicConfig = {
    mute: false,
    volume: 0.7,
    rate: 1,
    detune: 0,
    seek: 0,
    loop: true,
    delay: 0
  };

  this.bgAudio.play(musicConfig);
  this.sys.install('DialogModalPlugin');  // old plugin
  this.sys.dialogModal.init();
  this.sys.dialogModal.setText(pickLine(), true);
  this.input.mouse.disableContextMenu();

  // a counter 
  var counter = 666;
  counterDisplay = this.add.text(630, 20, "Queue: " + counter, { font: '30px Arial', fill: '#ffff00' });

  // states
  var talking = false;

  // Adds dialog options in the scene
  choiceA = this.add.text(50, 480, "- Have you tried turning it on and off?", { font: '16px Arial', fill: '#fff' });
  choiceB = this.add.text(50, 510, "- Not my problem ", { font: '16px Arial', fill: '#fff' });
  choiceC = this.add.text(50, 540, "- Next please...", { font: '16px Arial', fill: '#fff' });

  // Adds input callback to each text object
  choiceA.setInteractive();
  choiceB.setInteractive();
  choiceC.setInteractive();

  choiceA.on("pointerdown", function (event) {
    this.sys.dialogModal.setText(pickReply(), true);
  }, this);

  choiceB.on("pointerdown", function (event) {
    this.sys.dialogModal.setText(pickReply(), true);
  }, this);

  choiceC.on("pointerdown", function (event) {
    this.sys.dialogModal.setText(pickLine(), true);
    counter--;
    counterDisplay.setText("Queue: " + counter);
  }, this);

  this.input.on("pointerdown", function (event) {
    // Add a function for global click here if we ever need it
  }, this);

  // // this part is firing a new text everytime u press one of the two buttons on ur mouse
  // this.input.on('pointerdown', function (pointer) {
  //   if (pointer.rightButtonDown()) {
  //     this.sys.dialogModal.setText(pickLine(), true);
  //   } else {
  //     this.sys.dialogModal.setText(pickLine(), true);
  //   }
  // }, this);
}
// function update() {
  // var pointer = this.input.activePointer();
// }

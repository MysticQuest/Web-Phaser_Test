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
  this.load.plugin('DialogModalPlugin', './dialog.js');
  this.load.image("bg", "./assets/eforia.png");
  this.load.image("char", "./assets/bk.png");

}

function create() {
  this.add.image(700, 300, "bg");
  this.add.image(300, 300, "char");
  this.sys.install('DialogModalPlugin');
  this.sys.dialogModal.init();
  this.sys.dialogModal.setText(pickLine(), true);
  this.input.mouse.disableContextMenu();

  // this part is firing a new  text everytime u press one of the two buttons on ur mouse
  this.input.on('pointerdown',function(pointer) {
      if (pointer.rightButtonDown()) {
        this.sys.dialogModal.setText(pickLine(),true);
      } else {
        
        this.sys.dialogModal.setText(pickLine(),true);
      }

  },this);
}
function update() {
var pointer = this.input.activePointer();
}
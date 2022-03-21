import Phaser from 'phaser';

class PreloadScene extends Phaser.Scene {
  constructor() {
    super('PreloadScene');
  }
  preload() {
    this.load.image('sky', 'assets/sky.png');
  }

  create() {
    this.scene.start('PlayScene');
  }
}

export default PreloadScene;

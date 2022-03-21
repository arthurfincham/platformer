import Phaser from 'phaser';

class PlayScene extends Phaser.Scene {
  constructor() {
    super('PlayScene');
  }

  create() {
    const map = this.createMap();
    const layers = this.createLayers(map);
    this.player = this.createPlayer();

    this.playerSpeed = 200;
    this.physics.add.collider(this.player, layers.platformColliders);
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  createMap() {
    const map = this.make.tilemap({ key: 'map' });
    map.addTilesetImage('main_lev_build_1', 'tiles-1');
    return map;
  }

  createLayers(map) {
    const tileset = map.getTileset('main_lev_build_1');
    const platformColliders = map.createStaticLayer(
      'platform_colliders',
      tileset
    );
    const platforms = map.createStaticLayer('platforms', tileset);
    const environment = map.createStaticLayer('environment', tileset);
    platformColliders.setCollisionByExclusion(-1, true);
    return { environment, platforms, platformColliders };
  }

  createPlayer() {
    const player = this.physics.add.sprite(100, 250, 'player');
    player.body.setGravityY(500);
    player.setCollideWorldBounds(true);
    return player;
  }

  update() {
    const { left, right } = this.cursors;
    if (left.isDown) {
      this.player.setVelocityX(-this.playerSpeed);
    } else if (right.isDown) {
      this.player.setVelocityX(this.playerSpeed);
    } else {
      this.player.setVelocityX(0);
    }
  }
}

export default PlayScene;

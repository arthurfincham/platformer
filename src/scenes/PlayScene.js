import Phaser from 'phaser';
import Player from '../entities/Player';
class PlayScene extends Phaser.Scene {
  constructor() {
    super('PlayScene');
  }

  create() {
    const map = this.createMap();
    const layers = this.createLayers(map);
    this.player = this.createPlayer();

    this.physics.add.collider(this.player, layers.platformColliders);
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
    return new Player(this, 100, 250);
  }
}

export default PlayScene;

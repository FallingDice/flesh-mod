/*
const hive = extend(PowerTurret, "hive", {
  size: 3,
  solid: false,
  destructible: true,
  rebuildable: false,
  destroySound: Sounds.plantBreak,
  update: false  // 동작 X
});

hive.buildType = () => extend(PowerTurret.PowerTurretBuild, hive, {});

module.exports = {
  hive: hive
};
*/



/*
const hive = extend(PowerTurret, "hive", {
  size: 3,
  solid: false,
  destructible: true,
  rebuildable: false,
  destroySound: Sounds.plantBreak,
  update: false
});

const spawnMissile = extend(BasicBulletType, {
  damage: 0,
  speed: 0,
  lifetime: 0,
  collides: false,
  collidesAir: false,
  instanceDisappear: true, // 핵심!
  despawned(b){
    const unitType = Vars.content.getByName(ContentType.unit, "fleshball");
    if(unitType){
      unitType.spawn(b.team, b.x, b.y);
    }
  }
});

hive.buildType = () => extend(PowerTurret.PowerTurretBuild, hive, {
  placed() {
    this.super$placed();
    spawnMissile.create(this, this.team, this.x, this.y, 0, 0, 0);
  }
});

module.exports = {
  hive: hive
};
*/




const hive = extend(PowerTurret, "hive", {
  size: 3,
  solid: false,
  destructible: true,
  rebuildable: false,
  destroySound: Sounds.plantBreak,
  update: false
});

const spawnMissile = extend(BasicBulletType, {
  speed: 0,
  lifetime: 1,
  damage: 0,
  hitEffect: Fx.none,
  despawnEffect: Fx.none,
  collides: false,
  collidesAir: false,
  instanceDisappear: true,  // 필수
  keepVelocity: false,
  despawned(b) {
    const unitType = Vars.content.getByName(ContentType.unit, "fleshball");
    if (unitType != null) {
      unitType.spawn(b.owner.team, b.x, b.y);
    }
  }
});

hive.buildType = () => extend(PowerTurret.PowerTurretBuild, hive, {
  placed() {
    this.super$placed();
    spawnMissile.create(this, this.team, this.x, this.y, 0, 0, 1, 1);
  }
});

module.exports = {
  hive: hive
};

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



const hive = extend(PowerTurret, "hive", {
  size: 3,
  solid: false,
  destructible: true,
  rebuildable: false,
  destroySound: Sounds.plantBreak,
  update: true  // 반드시 true로 해야 update()가 호출됩니다
});

// 1. 총알 타입 정의
const hiveBullet = extend(BasicBulletType, {
  speed: 6,
  damage: 15,
  lifetime: 50,
  width: 8,
  height: 8,
  hitEffect: Fx.hitBullet,
  hitSound: Sounds.hitBullet,
});

// 2. 무기 정의
const hiveWeapon = extend(Weapon, {
  reload: 30,
  recoil: 1,
  shootSound: Sounds.shoot,
  bullet: hiveBullet,
  x: 0,
  y: 0,
  top: true,
});

// 3. 무기 등록
hive.weapons.add(hiveWeapon);

// 4. buildType에 update 구현, 반드시 super$update() 호출
hive.buildType = () => extend(PowerTurret.PowerTurretBuild, hive, {
  update() {
    this.super$update();
  }
});

module.exports = {
  hive: hive
};

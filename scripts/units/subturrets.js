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
  update: false  // 동작 X
});

hive.buildType = () => extend(PowerTurret.PowerTurretBuild, hive, {
  placed() {
    this.super$placed();
    // 설치될 때 소환할 유닛 지정
    const unitType = Vars.content.getByName(ContentType.unit, "fleshball");
    if(unitType){
      // 설치 위치 근처에 소환
      let spawnX = this.x;
      let spawnY = this.y;
      unitType.spawn(this.team, spawnX, spawnY);
    }
  }
});

module.exports = {
  hive: hive
};
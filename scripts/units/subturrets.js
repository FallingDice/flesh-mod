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



const testTurret = extend(PowerTurret, "test-turret", {
  size: 3,
  solid: false,
  destructible: true,
  rebuildable: false,
  destroySound: Sounds.plantBreak,
  update: true //이게 핵심인가?
});

testTurret.buildType = () => extend(PowerTurret.PowerTurretBuild, testTurret, {});

module.exports = {
  testTurret: testTurret
};
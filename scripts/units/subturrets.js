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
  update: true
});

hive.buildType = () => extend(PowerTurret.PowerTurretBuild, hive, {});

module.exports = {
  hive: hive
};
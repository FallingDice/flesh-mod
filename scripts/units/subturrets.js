const hive = extend(PowerTurret, "hive", {
  destructible: true,
  rebuildable: false,
  destroySound: Sounds.plantBreak,
  update: false  // 동작 X
});

hive.buildType = () => extend(PowerTurret.PowerTurretBuild, hive, {});

module.exports = {
  hive: hive
};
const blade = extend(PowerTurret, "testunit", {
  size: 3,
  solid: false,
  destructible: true,
  rebuildable: false,
  update: false  // 동작 X
});

blade.buildType = () => extend(PowerTurret.PowerTurretBuild, blade, {});

module.exports = {
  blade: blade
};
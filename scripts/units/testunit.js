//유닛 정의
const Tunit = extend(UnitType, "testunit1f", {});
Tunit.constructor = () => extend(PayloadUnit, {});
Tunit.payloadCapacity = (40 * 40) * Vars.tilePayload;

//유닛의 무기 정의
const gun = extend(Weapon, "flesh-mod-fleshgun", {
  y: 0,
  x: 0,
  top: true,
  rotate: true,
  inaccuracy: 2,
  reload: 10,
  alternate: true,
  shootSound: Sounds.pew,
  bullet: testbullet
});

//총알 정의
const testbullet = extend(BasicBulletType, {
  speed: 8,
  damage: 15,
  width: 7,
  height: 9,
  frontColor: Color.valueOf("#ff4040"),
  backColor: Color.valueOf("#ss2020"),
  status: StatusEffects.burning,
  lifetime: 32,
  buildingDamageMultiplier: 0.3,
  keepVelocity: false
});

//무기 추가
Tunit.weapons.add(
  gun
);

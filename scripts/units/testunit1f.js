//유닛 정의
const testunit1f = extend(UnitType, "testunit1f", {});
cunit.constructor = () => extend(UnitEntity, {});

//유닛의 무기 정의
const gun = extend(Weapon, {
  y: 5,
  shots: 1,
  x: 5,
  top: true,
  rotate: true,
  inaccuracy: 2,
  reload: 10,
  alternate: true,
  shootSound: Sounds.pew,
  bullet: testbul
});

//총알 정의
const testbul = extend(BasicBulletType, {
  speed: 8,
  damage: 15,
  width: 7,
  height: 9,
  frontColor: Color.valueOf("#6ecdec"),
  backColor: Color.valueOf("#5091a6"),
  status: StatusEffects.burning,
  lifetime: 32,
  buildingDamageMultiplier: 0.3,
  keepVelocity: false
});

//무기 추가
testunit1f.weapons.add(
  gun
);

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


const testWeapon3 = new Weapon("flesh-mod-fleshgun");
const testBullet2 = new LightningBulletType();

testWeapon3.reload = 40;
testWeapon3.shootY = 2.5;
testWeapon3.shake = 2.2;
testWeapon3.shots = 3;
testWeapon3.inaccuracy = 35;
testWeapon3.shotDelay = 0.5;
testWeapon3.spacing = 0;
testWeapon3.recoil = 2.5;
testWeapon3.x = 20;
testWeapon3.y = 0;
testWeapon3.rotate = false;
testWeapon3.top = true;
testWeapon3.ejectEffect = Fx.none;
testWeapon3.shootSound = Sounds.spark;
testWeapon3.bullet = testBullet2;

testBullet2.damage = 20;
testBullet2.lightningLength = 9;
testBullet2.lightningLengthRand = 7;
testBullet2.shootEffect = Fx.shootHeal;

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
  testWeapon3
);

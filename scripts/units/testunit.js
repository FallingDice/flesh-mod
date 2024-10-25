//유닛 정의
const Tunit = extend(UnitType, "testunit1f", {});
Tunit.constructor = () => extend(UnitEntity, {});

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

//유닛의 무기 정의
const gun = extend(Weapon, {
  name: fleshgun,
  y: 5,
  shots: 5,
  x: 5,
  top: true,
  rotate: true,
  inaccuracy: 2,
  reload: 10,
  alternate: true,
  shootSound: Sounds.pew,
  bullet: testbul
});

//무기 추가
Tunit.weapons.add(
  gun
);

Blocks.airFactory.plans.add(new UnitFactory.UnitPlan(Tunit, 60 * 20, ItemStack.with(Items.silicon, 10, Items.titanium, 5)));

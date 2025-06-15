//유닛 정의
/*
const testunit = extend(UnitType, "testunit", {});
testunit.constructor = () => extend(PayloadUnit, {});
testunit.payloadCapacity = (20 * 20) * Vars.tilePayload;
*/



const blockcheck = require("units/blockcheck");
const subturrets = require("units/subturrets");

const testunit = extend(UnitType, "testunit", {});
testunit.constructor = () => extend(LegsUnit, {});

const installBullet = extend(BasicBulletType, {
  speed: 3,
  lifetime: 30,
  damage: 0,
  instantDisappear: true,
  killShooter: true,
  despawned(b) {
    this.super$despawned(b);

    let canPlace = true;
    let count = 0;

    const tileX = Math.round(b.x / 8);
    const tileY = Math.round(b.y / 8);

    blockcheck.iterateSquare(tileX - 1, tileY - 1, 3, 3, other => {
      if (other.block() != Blocks.air && !(other.block() instanceof Prop && other.block().breakable)) {
        canPlace = false;
      }
      count++;
    });

    if (canPlace && count >= 9) {
      const centerTile = Vars.world.tile(tileX, tileY);
      if (centerTile != null) {
        centerTile.setNet(subturrets.testTurret, b.owner.team, 0);
      }
    }
  }
});

const installerWeapon = extend(Weapon, {
  reload: 120,
  bullet: installBullet,
  x: 0,
  y: 0,
  top: true
});

testunit.weapons.add(installerWeapon);

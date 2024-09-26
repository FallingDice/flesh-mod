// 필요한 Mindustry API 가져오기
const UnitTypes = require("mindustry/type/UnitTypes");
const Weapon = require("mindustry/type/Weapon");
const Bullets = require("mindustry/content/Bullets");
const Sounds = require("mindustry/audio/Sound");

// 새로운 유닛 정의
const customUnit = extend(UnitTypes.mono, "custom-unit", {
    health: 400,           // 유닛의 체력
    speed: 1.8,            // 유닛의 이동 속도
    flying: false,         // 비행 여부
    range: 120,            // 유닛의 공격 범위
    constructor: () => extend(UnitTypes.mono.constructor(), {
        update() {
            this.super$update();
        }
    })
});

// 유닛의 무기 정의
const customWeapon = new Weapon("custom-weapon");
customWeapon.reload = 45;                        // 재장전 시간
customWeapon.bullet = Bullets.standardCopper;    // 사용할 총알
customWeapon.shootSound = Sounds.shoot;          // 발사 소리
customWeapon.inaccuracy = 0.1;                   // 오차
customWeapon.bulletSpeed = 4;                    // 총알 속도

// 유닛에 무기 추가
customUnit.weapons.add(customWeapon);

// 유닛을 게임에 추가
Vars.content.units().add(customUnit);
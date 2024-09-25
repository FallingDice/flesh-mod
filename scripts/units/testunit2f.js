// 새로운 유닛을 정의
const testunit2f = extend(UnitTypes.alpha, "testunit2f", {
    speed: 2.5,        // 유닛의 이동 속도
    health: 500,       // 유닛의 체력
    armor: 5,          // 유닛의 방어력
    range: 120,        // 유닛의 공격 범위
    flying: false,     // 비행 여부
    constructor: () => extend(UnitTypes.alpha.constructor(), {
        // 유닛이 매 틱마다 실행할 동작 정의
        update() {
            // 기본적인 이동 및 행동 로직을 유지
            this.super$update();

            // 적을 찾아 자동 공격
            const target = Units.closestEnemy(this.team, this.x, this.y, this.range, u => true);
            if (target) {
                this.lookAt(target);  // 적을 바라봄
                this.shoot(target);   // 적에게 발사
            }
        }
    })
});

// 유닛의 무기를 정의
const customWeapon = new Weapon("custom-weapon");
customWeapon.reload = 30;                     // 무기 재장전 시간
customWeapon.bullet = Bullets.standardCopper; // 사용할 총알 (기본 구리 총알)
customWeapon.shootSound = Sounds.shootBig;    // 발사 소리
customWeapon.inaccuracy = 0.2;                // 발사 시 오차
customWeapon.bulletSpeed = 5;                 // 총알 속도

// 무기를 유닛에 장착
testunit2f.weapons.add(customWeapon);

// 유닛 생성 시 이펙트 추가
testunit2f.constructor = () => extend(UnitTypes.alpha.constructor(), {
    init() {
        this.super$init();
        Fx.spawn.at(this.x, this.y);  // 스폰 이펙트
    }
});

// 유닛을 게임에 추가
Vars.content.units().add(testunit2f);
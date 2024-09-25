const testunit2f = {
    name: "testunit2f",
    health: 150,
    armor: 5,
    speed: 2.5,
    range: 100,
    debuffRange: 50, // 디버프 범위
    debuffEffect: function(target) {
        if (this.getDistanceTo(target) <= this.debuffRange) {
            target.speed *= 0.5;  // 속도 디버프 (50% 감소)
        }
    },
    getDistanceTo: function(target) {
        // 거리 계산 로직
        return Math.sqrt(Math.pow(target.x - this.x, 2) + Math.pow(target.y - this.y, 2));
    }
};

// 주기적으로 근처 유닛에게 디버프 적용
setInterval(() => {
    // 예시: targets 배열에는 현재 범위 내의 적 유닛이 들어있다고 가정
    targets.forEach(target => {
        testunit2f.debuffEffect(target);
    });
}, 1000);  // 매초 디버프 체크

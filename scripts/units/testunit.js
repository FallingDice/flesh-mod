//유닛 정의
const testunit = extend(UnitType, "testunit", {});
testunit.constructor = () => extend(PayloadUnit, {});
testunit.payloadCapacity = (20 * 20) * Vars.tilePayload;
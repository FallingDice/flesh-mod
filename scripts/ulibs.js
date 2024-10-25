module.exports = {

  //Wonderful function stolen from 7rodo!
  spawnUnit(unit, team, x, y){
    try {
      var baseUnit = unit.create(team);

      baseUnit.set(x, y);
      baseUnit.add();
      Events.fire(new EventType.UnitCreateEvent(baseUnit));
      return baseUnit;
    } catch(err){}
  }
}

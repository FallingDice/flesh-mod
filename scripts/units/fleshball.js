const spawnUnit = Vars.content.getByName(ContentType.unit, "arkyid");

unitSpawn1.spawnEffect = mendSpawn;

testunit4.abilities.add(new UnitSpawnAbility(spawnUnit, 7 * 60, 18, -7));

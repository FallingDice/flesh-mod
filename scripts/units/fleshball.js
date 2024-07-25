const spawnUnit = Vars.content.getByName(ContentType.unit, "fleshball");

unitSpawn1.spawnEffect = mendSpawn;

fleshball.abilities.add(new UnitSpawnAbility(spawnUnit, 7 * 60, 18, -7));

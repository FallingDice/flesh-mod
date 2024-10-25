const freezeBombWeak = new Effect(30, e => {
  Draw.color(Color.valueOf("#6ecdec"));
  Lines.stroke(e.fout() * 2);
  let circleRad = 4 + e.finpow() * 96;
  Lines.circle(e.x, e.y, circleRad);
  Draw.color(Color.valueOf("#6ecdec"));
  for(let i = 0; i < 3; i++){
    Drawf.tri(e.x, e.y, 6, 70 * e.fout(), (i*120)-90);
  }
  for(let i = 0; i < 3; i++){
    Drawf.tri(e.x, e.y, 6, 45 * e.fout(), (i*120)+90);
  }
  Draw.color();
  for(let i = 0; i < 3; i++){
    Drawf.tri(e.x, e.y, 3, 25 * e.fout(), (i*120)-90);
  }
  for(let i = 0; i < 3; i++){
    Drawf.tri(e.x, e.y, 3, 12.5 * e.fout(), (i*120)+90);
  }
  Drawf.light(e.x, e.y, circleRad * 1.6, Color.valueOf("#6ecdec"), e.fout());
});

module.exports = {
    testbul: testbul
};

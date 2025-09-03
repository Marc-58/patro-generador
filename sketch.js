let mides = {};
let tipus; // Declarar la variable tipus

function seleccionar(peca) {
  tipus = peca;
  document.getElementById("triar-peca").style.display = "none";
  document.querySelectorAll('.formulari').forEach(f => f.style.display = 'none');
  document.getElementById(peca + '-form').style.display = 'block';
}

function generarPatro(peca) {
  if (peca === "faldilla") {
    mides.llarg = parseInt(document.getElementById("llargFaldilla").value, 10);
    mides.cintura = parseInt(document.getElementById("cinturaFaldilla").value, 10);
    mides.cadera = parseInt(document.getElementById("caderaFaldilla").value, 10);

    if (isNaN(mides.llarg) || isNaN(mides.cintura) || isNaN(mides.cadera)) {
      alert("Revisa que totes les mides de la faldilla estiguin introduïdes correctament.");
      return;
    }
  } else if (peca === "brusa") {
    mides.cintura = parseInt(document.getElementById("cinturaBrusa").value, 10);
    mides.cadera = parseInt(document.getElementById("caderaBrusa").value, 10);
    mides.talleEspatlles = parseInt(document.getElementById("talleEspatlles").value, 10);
    mides.pit = parseInt(document.getElementById("pit").value, 10);
    mides.torax = parseInt(document.getElementById("torax").value, 10);
    mides.altDePit = parseInt(document.getElementById("altDePit").value, 10);
    mides.coll = parseInt(document.getElementById("coll").value, 10);
    mides.sisa = parseInt(document.getElementById("sisa").value, 10);
    mides.caiguda = parseInt(document.getElementById("caiguda").value, 10);
    mides.espatllesTotal = parseInt(document.getElementById("espatllesTotal").value, 10);
    mides.talleDavanter = parseInt(document.getElementById("talleDavanter").value, 10);

    if (Object.values(mides).some(v => isNaN(v))) {
      alert("Revisa que totes les mides de la brusa estiguin introduïdes correctament.");
      return;
    }
  }

  const container = document.getElementById("canvas-container");
  container.innerHTML = '';
  new p5(dibuixaPatro, container);

  // mostra el botó de descarregar després de generar
  document.getElementById("btnDescarregar").style.display = "block";
}

function dibuixaPatro(p) {
  p.setup = function () {
    const escala = 10;
    p.createCanvas(1300, 1300);
    p.background(255);
    p.stroke(0);
    p.noFill();

    if (tipus === "faldilla") {
      const cintura = mides.cintura * escala;
    const cadera = mides.cadera * escala;
    const llarg = mides.llarg * escala;
    const marge = 10;

    // Dibuix del patró de la faldilla
    // Dibuixar línies verticals i horitzontals per marcar la forma
    p.line(marge, marge, marge, marge + llarg); // línia esquerra
    p.line(marge, marge + llarg, marge + cadera / 4 + escala, marge + llarg); // línia inferior
    p.line(marge, marge, marge + cintura / 4 + 4 * escala, marge); // línia superior esquerra
    p.line(marge + cintura / 4 + 4 * escala, marge, marge + cadera / 4 + escala, marge + 18 * escala); // línia superior dreta
    p.line(marge + cadera / 4 + escala, marge + 18 * escala, marge + cadera / 4 + escala, marge + llarg); // línia dreta

    // Dibuixar pinces a la cintura
    const pinçaX1 = marge + cintura / 8;
    p.line(pinçaX1, marge, pinçaX1 + 1.5 * escala, marge + 10 * escala); // línia de pinça esquerra
    p.line(pinçaX1 + 3 * escala, marge, pinçaX1 + 1.5 * escala, marge + 10 * escala); // línia de pinça dreta

    // Separació entre les dues parts de la faldilla
    const sep = marge + cadera / 4 + 100;

    // Dibuixar la segona part de la faldilla
    p.line(sep, marge, sep, marge + llarg); // línia esquerra
    p.line(sep, marge + llarg, sep + cadera / 4 + escala, marge + llarg); // línia inferior
    p.line(sep, marge, sep + cintura / 4 + 2 * escala, marge); // línia superior esquerra
    p.line(sep + cintura / 4 + 2 * escala, marge, sep + cadera / 4 + escala, marge + 18 * escala); // línia superior dreta
    p.line(sep + cadera / 4 + escala, marge + 18 * escala, sep + cadera / 4 + escala, marge + llarg); // línia dreta

    // Dibuixar pinces a la segona part de la cintura
    const pinçaX2 = sep + cintura / 8 + escala;
    p.line(pinçaX2, marge, pinçaX2 + 1.5 * escala, marge + 10 * escala); // línia de pinça esquerra
    p.line(pinçaX2 + 3 * escala, marge, pinçaX2 + 1.5 * escala, marge + 10 * escala); // línia de pinça dreta

    } else if (tipus === "brusa") {
      const espatlles = mides.espatllesTotal * escala;
      const talleEspatlles = mides.talleEspatlles * escala;
      const coll = mides.coll * escala;
      const torax = mides.torax * escala;
      const sisa = mides.sisa * escala;
      const cintura = mides.cintura * escala;
      const caiguda = mides.caiguda * escala;
      const marge = espatlles / 2 + 20 * escala + 10;
      const talleDavanter = mides.talleDavanter * escala;
      const altDePit = mides.altDePit * escala;
      const pit = mides.pit * escala;

      // (la resta del teu codi de dibuix de brusa, sense canvis)
      // ...
    }
  };
}

function descarregarCanvas() {
  const canvases = document.getElementsByTagName("canvas");
  if (canvases.length > 0) {
    const canvas = canvases[0];
    const link = document.createElement('a');
    link.download = tipus + '_patro.png';
    link.href = canvas.toDataURL();
    link.click();
  }
}



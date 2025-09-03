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

      // Part esquerra - esquena
      p.rect(10, 10, espatlles / 2, talleEspatlles);
      p.line(10 + coll / 6, 10, 10 + espatlles / 2, 10 + (talleEspatlles - caiguda)); // espatlla
      p.line(10 + torax / 4, talleEspatlles - caiguda + sisa + 10, 10 + cintura / 4 + 2 * escala, 10 + talleEspatlles); // cintura
      p.line(10 + cintura / 8 + 1.5 * escala, talleEspatlles - caiguda + sisa + 10, 10 + (cintura / 8), 10 + talleEspatlles); // pinça esquerra
      p.line(10 + cintura / 8 + 1.5 * escala, talleEspatlles - caiguda + sisa + 10, 10 + (cintura / 8) + 3 * escala, 10 + talleEspatlles); // pinça dreta
      p.line(10, 10 + talleEspatlles, 10 + (cintura / 4) - 1 * escala, 10 + talleEspatlles); // línia cintura

      // Corba realista de la sisa (Bezier)
      p.bezier(
        10 + espatlles / 2, 10 + (talleEspatlles - caiguda),
        10 + espatlles / 2 - 2 * escala, 10 + (talleEspatlles - caiguda) + 5 * escala,
        10 + torax / 4 - 5 * escala, 10 + sisa,
        10 + torax / 4, talleEspatlles - caiguda + sisa + 10
      );

      p.bezier(
        10, 10 + 1 * escala,
        10 + coll / 8, 10 + 1 * escala,
        10 + 2 * escala, 10 + 1 * escala,
        10 + coll / 6, 10
      );

      // Part dreta - davanter
      p.rect(marge, 10, torax / 4, talleDavanter);
      p.line(marge + coll / 6, 10, marge + torax / 4 - (torax / 4 - espatlles / 2), 10 + (talleEspatlles - caiguda)); // línia espatlla
      p.line(marge, 10 + altDePit, marge + (pit / 2), 10 + altDePit); // línia alt de pit
      p.line(marge, 10 + talleDavanter, marge + (cintura / 4 + 4 * escala), 10 + talleDavanter); // línia cintura
      p.line(marge + torax / 4 - cintura / 8, 10 + talleDavanter, marge + torax / 4 - cintura / 8 - 1.5 * escala, 10 + altDePit); // pinça esquerra
      p.line(marge + torax / 4 - cintura / 8 - 3 * escala, 10 + talleDavanter, marge + torax / 4 - cintura / 8 - 1.5 * escala, 10 + altDePit); // pinça dreta

      // IGUAL ESQUENA
      const xL1 = 10 + torax / 4;
      const yL1 = talleEspatlles - caiguda + sisa + 10;
      const xL2 = 10 + cintura / 4 + 2 * escala;
      const yL2 = 10 + talleEspatlles;
      const llarg = Math.sqrt((xL2 - xL1)**2 + (yL2 - yL1)**2);
      const xA = marge + (cintura / 4 + 4 * escala);
      const yA = 10 + talleDavanter;
      const xB = marge + (pit / 2);
      const yB = 10 + altDePit;
      const dx = xB - xA;
      const dy = yB - yA;
      const modul = Math.sqrt(dx * dx + dy * dy);
      const ux = dx / modul;
      const uy = dy / modul;
      const xFinal = xA + ux * llarg;
      const yFinal = yA + uy * llarg;
     
      p.line(xA, yA, xFinal, yFinal);

      p.line(marge +  torax / 4, 10+sisa , marge + torax / 4 - (torax / 4 - espatlles / 2), 10 + (talleEspatlles - caiguda)); // línia sisa
// Sisa davantera (corba)
        
p.bezier(
  marge + torax / 4 - (torax / 4 - espatlles / 2) ,              // Punt superior lleugerament a la dreta
  10 + (talleEspatlles - caiguda),                                  // Punt inferior lleugerament a l'esquerra
  marge + torax / 4 - 4 * escala, 10 + sisa / 3,                          // Primer punt de control
  marge + torax / 4 - 12 * escala, 10 + (sisa / 4) * 3,                   // Segon punt de control
  marge + torax / 4 , 10 + sisa
);

// Línia vertical des de la sisa fins a l'altura de pit
p.line(
  marge + torax / 4,
  10 + sisa,
  marge + torax / 4 - cintura / 8 - 1.5 * escala,
  10 + altDePit
);

// Línia diagonal des de l'altura de pit fins al final projectat
p.line(
  marge + torax / 4 - cintura / 8 - 1.5 * escala,
  10 + altDePit,
  xFinal,
  yFinal
);

//p.arc(marge, 10, coll/6+2, coll/6 + 4*escala, 0, p.HALF_PI);
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



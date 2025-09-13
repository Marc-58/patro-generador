let mides = {};
let tipus;

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

    if (Object.values(mides).some(v => isNaN(v))) {
      alert("Introdueix totes les mides correctament per a la faldilla.");
      return;
    }

  } else if (peca === "brusa") {
    mides.cintura = parseInt(document.getElementById("cinturaBrusa").value, 10);
    mides.talleEspatlles = parseInt(document.getElementById("talleEspatlles").value, 10);
    mides.pit = parseInt(document.getElementById("pit").value, 10);
    mides.torax = parseInt(document.getElementById("torax").value, 10);
    mides.altDePit = parseInt(document.getElementById("altDePit").value, 10);
    mides.coll = parseInt(document.getElementById("coll").value, 10);
    mides.sisa = parseInt(document.getElementById("sisa").value, 10);
    mides.caiguda = parseInt(document.getElementById("caiguda").value, 10);
    mides.espatllesTotal = parseInt(document.getElementById("espatllesTotal").value, 10);
    mides.talleDavanter = parseInt(document.getElementById("talleDavanter").value, 10);
    mides.cosACintura = parseInt(document.getElementById("cosACintura").value, 10);

    if (Object.values(mides).some(v => isNaN(v))) {
      alert("Revisa que totes les mides de la brusa estiguin introduïdes correctament.");
      return;
    }

  } else if (peca === "cosACadera") {
    mides.cadera = parseFloat(document.getElementById("caderaCosCadera").value);
    mides.cintura = parseFloat(document.getElementById("cinturaCosCadera").value);
    mides.coll = parseFloat(document.getElementById("collCosCadera").value);
    mides.talleEspatlles = parseFloat(document.getElementById("talleEspatllesCosCadera").value);
    mides.talleDavanter = parseFloat(document.getElementById("talleDavanterCosCadera").value);
    mides.altDePit = parseFloat(document.getElementById("altDePitCosCadera").value);
    mides.espatllesTotal = parseFloat(document.getElementById("espatllesCosCadera").value);
    mides.caiguda = parseFloat(document.getElementById("caigudaCosCadera").value);
    mides.sisa = parseFloat(document.getElementById("sisaCosCadera").value);
    mides.torax = parseFloat(document.getElementById("toraxCosCadera").value);
    mides.pit = parseFloat(document.getElementById("pitCosCadera").value);

    let midesNecessaries = [
      mides.coll, mides.talleEspatlles, mides.talleDavanter, mides.altDePit,
      mides.espatllesTotal, mides.caiguda, mides.sisa, mides.torax, mides.pit
    ];

    if (midesNecessaries.some(v => isNaN(v))) {
      alert("Revisa que totes les mides del cos estiguin introduïdes correctament.");
      return;
    }

  } else if (peca === "vestit") {
    mides.cadera = parseFloat(document.getElementById("caderaVestit").value);
    mides.cintura = parseFloat(document.getElementById("cinturaVestit").value);
    mides.coll = parseFloat(document.getElementById("collVestit").value);
    mides.talleEspatlles = parseFloat(document.getElementById("talleEspatllesVestit").value);
    mides.talleDavanter = parseFloat(document.getElementById("talleDavanterVestit").value);
    mides.altDePit = parseFloat(document.getElementById("altDePitVestit").value);
    mides.espatllesTotal = parseFloat(document.getElementById("espatllesVestit").value);
    mides.caiguda = parseFloat(document.getElementById("caigudaVestit").value);
    mides.sisa = parseFloat(document.getElementById("sisaVestit").value);
    mides.torax = parseFloat(document.getElementById("toraxVestit").value);
    mides.pit = parseFloat(document.getElementById("pitVestit").value);
    mides.llarg = parseFloat(document.getElementById("llargVestit").value);

    let midesNecessaries = [
      mides.coll, mides.talleEspatlles, mides.talleDavanter, mides.altDePit,
      mides.espatllesTotal, mides.caiguda, mides.sisa, mides.torax, mides.pit, mides.llarg
    ];

    if (midesNecessaries.some(v => isNaN(v))) {
      alert("Revisa que totes les mides del vestit estiguin introduïdes correctament.");
      return;
    }

  } else if (peca === "faldillaPantalo") {
    mides.cadera = parseFloat(document.getElementById("caderaFaldillaPantalo").value);
    mides.cintura = parseFloat(document.getElementById("cinturaFaldillaPantalo").value);
    mides.tiro = parseFloat(document.getElementById("tiroFaldillaPantalo").value);
    mides.llarg = parseFloat(document.getElementById("llargFaldillaPantalo").value);

    let midesNecessaries = [
      mides.cintura, mides.cadera, mides.tiro, mides.llarg
    ];

    if (midesNecessaries.some(v => isNaN(v))) {
      alert("Revisa que totes les mides de la faldilla-pantaló estiguin introduïdes correctament.");
      return;
    }
  }else if (peca === "pantalo") {
    mides.cadera = parseFloat(document.getElementById("caderaPantalo").value);
    mides.cintura = parseFloat(document.getElementById("cinturaPantalo").value);
    mides.tiro = parseFloat(document.getElementById("tiroPantalo").value);
    mides.llarg = parseFloat(document.getElementById("llargPantalo").value);
    mides.llargGenoll = parseFloat(document.getElementById("llargGenoll").value);

    let midesNecessaries = [
      mides.cintura, mides.cadera, mides.tiro, mides.llarg
    ];

    if (midesNecessaries.some(v => isNaN(v))) {
      alert("Revisa que totes les mides de la faldilla-pantaló estiguin introduïdes correctament.");
      return;
    }
    
  } else if (peca === "colls") {
    mides.coll = parseFloat(document.getElementById("collColls").value);

    let midesNecessaries = [
      mides.coll
    ];

    if (midesNecessaries.some(v => isNaN(v))) {
      alert("Revisa que totes les mides de colls estiguin introduïdes correctament.");
      return;
    }
  } else if (peca === "maniga") {
    mides.llargTotal = parseFloat(document.getElementById("llargTotalManiga").value);
    mides.llargBraç = parseFloat(document.getElementById("llargBraçManiga").value);
    mides.munyeca = parseFloat(document.getElementById("munyecaManiga").value);
    mides.contornBraç = parseFloat(document.getElementById("contornBraçManiga").value);

    let midesNecessaries = [
     mides.llargTotal, mides.llargBraç, mides.munyeca, mides.contornBraç
    ];

    if (midesNecessaries.some(v => isNaN(v))) {
      alert("Revisa que totes les mides de la faldilla-pantaló estiguin introduïdes correctament.");
      return;
    }
    
  } if (peca === "faldillaMitjaCapa") {
    mides.llarg = parseInt(document.getElementById("llargFaldillaMitjaCapa").value, 10);
    mides.cintura = parseInt(document.getElementById("cinturaFaldillaMitjaCapa").value, 10);

    if (Object.values(mides).some(v => isNaN(v))) {
      alert("Introdueix totes les mides correctament per a la faldilla mitja capa.");
      return;
    }

  } if (peca === "faldillaCapaSencera") {
    mides.llarg = parseInt(document.getElementById("llargFaldillaCapaSencera").value, 10);
    mides.cintura = parseInt(document.getElementById("cinturaFaldillaCapaSencera").value, 10);

    if (Object.values(mides).some(v => isNaN(v))) {
      alert("Introdueix totes les mides correctament per a la faldilla capa sencera.");
      return;
    }

  } 

  const container = document.getElementById("canvas-container");
  container.innerHTML = '';
  new p5(dibuixaPatro, container);

  document.getElementById("btnDescarregar").style.display = "inline-block";
}

function dibuixaPatro(p) {
  p.setup = function () {
    const escala = 10;
    const marge = 50;

    p.createCanvas(1800, 1300);
    p.background(255);
    p.stroke(0);
    p.noFill();

    if (tipus === "faldilla") {
      const cintura = mides.cintura * escala;
      const cadera = mides.cadera * escala;
      const llarg = mides.llarg * escala;

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
}

    else if (tipus === "brusa") {
      const espatlles = mides.espatllesTotal * escala;
      const talleEspatlles = mides.talleEspatlles * escala;
      const coll = mides.coll * escala;
      const torax = mides.torax * escala;
      const sisa = mides.sisa * escala;
      const cintura = mides.cintura * escala;
      const caiguda = mides.caiguda * escala;
      const talleDavanter = mides.talleDavanter * escala;
      const altDePit = mides.altDePit * escala;
      const pit = mides.pit * escala;
      const cosACintura = mides.cosACintura * escala;
            const marge = espatlles / 2 + 20 * escala + 10;

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




    } else if (tipus === "cosACadera") { 
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
  const cadera = mides.cadera * escala;

  // Part esquerra - esquena
  p.rect(10, 10, espatlles / 2, talleEspatlles+18*escala);
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
  p.rect(marge, 10, torax / 4, talleDavanter+18*escala);
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
  const llarg = Math.sqrt((xL2 - xL1) ** 2 + (yL2 - yL1) ** 2);
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

  p.line(marge + torax / 4, 10 + sisa, marge + torax / 4 - (torax / 4 - espatlles / 2), 10 + (talleEspatlles - caiguda)); // línia sisa

  // Sisa davantera (corba)
  p.bezier(
    marge + torax / 4 - (torax / 4 - espatlles / 2),
    10 + (talleEspatlles - caiguda),
    marge + torax / 4 - 4 * escala, 10 + sisa / 3,
    marge + torax / 4 - 12 * escala, 10 + (sisa / 4) * 3,
    marge + torax / 4, 10 + sisa
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

  //cadera
  p.line(10 +cadera / 4-1*escala ,talleEspatlles+18*escala+10, 10 + cintura / 4 + 2 * escala, 10 + talleEspatlles); // cintura
  p.line(marge+cadera / 4+1*escala,talleDavanter+18*escala+10, marge + (cintura / 4 + 4 * escala), 10 + talleDavanter); // línia cintura

  p.line(10 ,10+talleEspatlles+18*escala, 10 + cadera / 4 -1 * escala, 10 + talleEspatlles+18*escala); // cintura
  p.line(marge,talleDavanter+18*escala+10, marge + (cadera / 4 + 1 * escala),talleDavanter+18*escala+10); // línia cintura

  p.line(marge + torax / 4 - cintura / 8, 10 + talleDavanter, marge + torax / 4 - cintura / 8 - 1.5 * escala, 10 + talleDavanter+18*escala); // pinça esquerra
  p.line(marge + torax / 4 - cintura / 8 - 3 * escala, 10 + talleDavanter, marge + torax / 4 - cintura / 8 - 1.5 * escala, 10 + talleDavanter+18*escala); // pinça dreta
 p.line(10 + cintura / 8 + 1.5 * escala, talleEspatlles  + 10+18*escala, 10 + (cintura / 8), 10 + talleEspatlles); // pinça esquerra
  p.line(10 + cintura / 8 + 1.5 * escala,talleEspatlles  + 10+18*escala, 10 + (cintura / 8) + 3 * escala, 10 + talleEspatlles); // pinça dreta
  

    } else if (tipus === "vestit") {
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
  const llargVestit = mides.llargVestit * escala;
  const cadera = mides.cadera * escala;

  // Part esquerra - esquena
  p.rect(10, 10, espatlles / 2, talleEspatlles+18*escala);
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
  p.rect(marge, 10, torax / 4, talleDavanter+llargVestit);
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
  const llarg = Math.sqrt((xL2 - xL1) ** 2 + (yL2 - yL1) ** 2);
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

  p.line(marge + torax / 4, 10 + sisa, marge + torax / 4 - (torax / 4 - espatlles / 2), 10 + (talleEspatlles - caiguda)); // línia sisa

  // Sisa davantera (corba)
  p.bezier(
    marge + torax / 4 - (torax / 4 - espatlles / 2),
    10 + (talleEspatlles - caiguda),
    marge + torax / 4 - 4 * escala, 10 + sisa / 3,
    marge + torax / 4 - 12 * escala, 10 + (sisa / 4) * 3,
    marge + torax / 4, 10 + sisa
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

  //cadera
  p.line(10 +cadera / 4-1 ,talleEspatlles+18*escala+10, 10 + cintura / 4 + 2 * escala, 10 + talleEspatlles); // cintura-cadera
  p.line(marge+cadera / 4+1,talleDavanter+18*escala+10, marge + (cintura / 4 + 4 * escala), 10 + talleDavanter); // línia cintura-cadera

  p.line(10 ,10+talleEspatlles+18*escala, 10 + cadera / 4 -1 * escala, 10 + talleEspatlles+18*escala); // cadera
  p.line(marge,talleDavanter+18*escala+10, marge + (cadera / 4 + 1 * escala),talleDavanter+18*escala+10); // cadera

p.line(marge + torax / 4 - cintura / 8, 10 + talleDavanter, marge + torax / 4 - cintura / 8 - 1.5 * escala, 10 + talleDavanter+18*escala); // pinça esquerra
  p.line(marge + torax / 4 - cintura / 8 - 3 * escala, 10 + talleDavanter, marge + torax / 4 - cintura / 8 - 1.5 * escala, 10 + talleDavanter+18*escala); // pinça dreta
 p.line(10 + cintura / 8 + 1.5 * escala, talleEspatlles  + 10+18*escala, 10 + (cintura / 8), 10 + talleEspatlles); // pinça esquerra
  p.line(10 + cintura / 8 + 1.5 * escala,talleEspatlles  + 10+18*escala, 10 + (cintura / 8) + 3 * escala, 10 + talleEspatlles); // pinça dreta
  
  // Part de vestit
  p.rect(10, talleEspatlles+18*escala+10, (cadera / 4)-1*escala, llargVestit-18*escala);
  p.rect(marge, talleDavanter+18*escala+10, (cadera / 4)+1*escala, llargVestit-18*escala);


    } else if (tipus === "faldillaPantalo") {
      const cintura = mides.cintura * escala;
      const tiro = mides.tiro * escala;
      const cadera = mides.cadera * escala;
      const llarg = mides.llarg * escala;
       const marge = 10 *escala;
      const m2 = cadera/4+marge+10*escala+cadera/6 ;
      const B = cadera/12 ;


      p.rect(marge, marge, cadera / 4, llarg );
      p.rect(m2, marge,cadera / 4, llarg );

      p.line(marge+cadera/4-(cintura/4+3),marge, marge ,marge+18*escala); // cint-cad
      p.line(m2+cadera/4-(cintura/4+3),marge, m2,marge+18*escala); // cint-cad

      p.line(marge+cadera/4-1*escala,marge, marge + cadera/4,marge+18*escala); // cul
      p.line(m2+cadera/4,marge, m2 + cadera/4,marge+tiro-13*escala); // braqueta

      p.line(marge+cadera/4+B,marge+tiro, marge+cadera/4+B+B/2+B/4 ,marge+tiro); // entrepierna

      p.line( marge+cadera/4+B+B/2+B/4 ,marge+tiro, marge+cadera/4+B+B/2+B/4+1.5*escala ,marge+llarg); // entrepierna
      p.line( m2+cadera/4+B ,marge+tiro, m2+cadera/4+B+1.5*escala ,marge+llarg); // entrepierna

      p.line(marge ,marge+18*escala, marge-1.5*escala ,marge+llarg); // cad-baix
      p.line(m2 ,marge+18*escala, m2-1.5*escala ,marge+llarg); // cad-baix

      p.line( marge+cadera/4+B+B/2+B/4+1.5*escala ,marge+llarg, marge-1.5*escala ,marge+llarg); // baix
      p.line( marge+cadera/4+B+1.5*escala ,marge+llarg, marge-1.5*escala ,marge+llarg); // baix

      p.line(marge+cadera/4-(cintura/4+3)+cintura/8,marge, marge+cadera/4-(cintura/4+3)+cintura/8+1.5*escala ,marge+11*escala ); // cint-cad
      p.line(marge+cadera/4-(cintura/4+3)+cintura/8+3*escala,marge, marge+cadera/4-(cintura/4+3)+cintura/8+1.5 *escala,marge+11*escala); // cint-cad
      p.line(m2+cadera/4-(cintura/4+3)+cintura/8,marge, m2+cadera/4-(cintura/4+3)+cintura/8+1.5*escala ,marge+11*escala ); // cint-cad
      p.line(m2+cadera/4-(cintura/4+3)+cintura/8+3*escala,marge, m2+cadera/4-(cintura/4+3)+cintura/8+1.5 *escala,marge+11*escala); // cint-cad

      // Radi del quart de cercle
const radi = B;  

// Dibuixar quart de rodona

p.arc(
  marge + cadera/4,          // centre X
  marge + tiro,              // centre Y
  2*radi,                   // ample
  2*radi,                   // alt
  p.HALF_PI * 3, 
  p.TWO_PI           // 270° → avall
);


const radi2 = B;

p.arc(
  m2 + cadera/4,             // centre X
  marge + tiro,              // centre Y
  2*radi,                   // ample
  2*radi,                   // alt
  p.HALF_PI * 3, 
  p.TWO_PI
);

      
    }else if (tipus === "pantalo") {
      const cintura = mides.cintura * escala;
      const tiro = mides.tiro * escala;
      const cadera = mides.cadera * escala;
      const llarg = mides.llarg * escala;
      const llargGenoll = mides.llargGenoll * escala;
      const marge = 10*escala
      const m2 = cadera/4+marge+10*escala ;


      p.rect(marge, marge, cadera / 4, llarg );
      p.rect(m2, marge,cadera / 4, llarg );

      p.line(marge+cadera/4-3*escala,marge, marge + cadera/4,marge+18*escala); // cul
      p.line(m2+cadera/4,marge, m2 + cadera/4,marge+tiro-13*escala); // bragueta

      p.bezier(  //linia fora
 marge+cadera/4-(cintura/4+3+3),marge,                     // pu
  marge -1*escala,marge+tiro , // control 1
  marge + 1.5*escala, marge+llargGenoll ,                    // punt final
  marge + 3*escala, marge+llarg ,                    // punt final
);
p.bezier(//linia entrecama
  marge+cadera/4+cadera/10 +1*escala , marge+ tiro+1*escala,                     // punt inicial
  marge +cadera/4+4*escala, marge+llargGenoll , // control 1
  marge + cadera/4+3*escala , marge+llargGenoll+(llarg+llargGenoll)  ,                    // punt final
  marge + cadera/4+2*escala, marge +llarg,                   // control 2
);


 p.line(marge+cadera/4-(cintura/4+3+3)+cintura/8,marge, marge+cadera/4-(cintura/4+3)+cintura/8+1.5*escala ,marge+11*escala ); // cint-cad
      p.line(marge+cadera/4-(cintura/4+3+3)+cintura/8+3*escala,marge, marge+cadera/4-(cintura/4+3)+cintura/8+1.5 *escala,marge+11*escala); // cint-cad
      p.line(m2+cadera/4-(cintura/4+3)+cintura/8,marge, m2+cadera/4-(cintura/4+3)+cintura/8+1.5*escala ,marge+11*escala ); // cint-cad
      p.line(m2+cadera/4-(cintura/4+3)+cintura/8+3*escala,marge, m2+cadera/4-(cintura/4+3)+cintura/8+1.5 *escala,marge+11*escala); // cint-cad

      
p.stroke("red");
p.strokeWeight(6)
       p.line(marge+cadera/4-(cintura/4+3+3),marge, marge+cadera/4-3*escala ,marge); // cint-cad
      
      p.line( marge+3*escala,marge+llarg, marge+cadera/4+2*escala ,marge+llarg); // baix
      p.line( marge+cadera/4+B+1.5*escala ,marge+llarg, marge-1.5*escala ,marge+llarg); // baix

      // afegeix aquí més detalls del dibuix...
      
    }else if (tipus === "colls") {
      const coll = mides.coll * escala;
      
      p.rect(marge, marge, coll/2, 6*escala);
      
      p.line(marge+coll/2-1*escala,marge, marge+coll/2, marge+5*escala );
      p.line(marge+coll/6,marge+6*escala, marge+coll/2, marge+5*escala );




      
    }else if (tipus === "maniga") {
      const llargTotal = mides.llargTotal * escala;
      const llargBraç = mides.llargBraç * escala;
      const munyeca = mides.munyeca * escala;
      const contornBraç = mides.contornBraç * escala;
      p.line(marge,marge+(llargTotal-llargBraç), marge+(contornBraç/2-munyeca/2), marge+llargTotal );
      p.line(marge+contornBraç,marge+(llargTotal-llargBraç), marge+(contornBraç/2-munyeca/2)+munyeca, marge+llargTotal );
      p.rect(marge, marge, contornBraç,llargTotal);
p.stroke("red");
p.strokeWeight(6);
   

       p.point(marge+contornBraç/4,marge+(llargTotal-llargBraç)/2);
      p.point( marge+contornBraç*3/4,marge+(llargTotal-llargBraç)/2);
      p.point(marge+contornBraç/2, marge-2*escala);


p.bezier(
  marge, marge + (llargTotal - llargBraç),                     // punt inicial
  marge + contornBraç / 4, marge + (llargTotal - llargBraç) / 2, // control 1
  marge + contornBraç / 8*2.5, marge-2*escala  ,                    // punt final
  marge + contornBraç / 2, marge - 2 * escala,                   // control 2
);
p.bezier(
  marge+contornBraç , marge + (llargTotal - llargBraç),                     // punt inicial
  marge + contornBraç / 4*3, marge + (llargTotal - llargBraç) / 2, // control 1
  marge + contornBraç / 8*5.5, marge-2*escala  ,                    // punt final
  marge + contornBraç / 2, marge - 2 * escala,                   // control 2
);



      
      
    }if (tipus === "faldillaMitjaCapa") {
      const cintura = mides.cintura * escala;
      const llarg = mides.llarg * escala;
       const radi = cintura / (2 * Math.PI)*2;

    // Arc de cintura (semicercle cap avall)
    p.arc(0, marge , 2 *radi ,2*radi, 0, p.PI);
    p.arc(0 , marge , 2 * radi+llarg*2, 2 * radi+llarg*2, 0, p.PI);
    p.line(0,marge, radi+llarg, marge );
    p.line(1,marge, 1, marge+radi+llarg );

  
     
    } if (tipus === "faldillaCapaSencera") {
      const cintura = mides.cintura * escala;
      const llarg = mides.llarg * escala;
     const radi = cintura / (2 * Math.PI);

    // Arc de cintura (semicercle cap avall)
    p.arc(marge + radi+llarg , marge , 2 *radi ,2*radi, 0, p.PI);
    p.arc(marge + radi+llarg , marge , 2 * radi+llarg*2, 2 * radi+llarg*2, 0, p.PI);
    p.line(marge, marge, marge + 2 * radi*2+llarg*2, marge );
}
  };
}

function descarregarCanvas() {
  const canvases = document.getElementsByTagName("canvas");
  if (canvases.length > 0) {
    const canvas = canvases[0];
    const link = document.createElement('a');
    link.download = tipus + '_patro.png';
    link.href = canvas.toDataURL("image/png");
    link.click();
  }
}

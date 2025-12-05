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
    mides.llargGenoll = parseFloat(document.getElementById("llargGenollPantalo").value);

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

    if (tipus === "faldilla") {
      const cintura = mides.cintura * escala;
      const cadera = mides.cadera * escala;
      const llarg = mides.llarg * escala;

      // Crear el canvas amb dimensions dinàmiques
      p.createCanvas(cadera/2 +100 + 2 * marge, llarg + 2 * marge);
      p.background(255);
      p.stroke(0);
      p.noFill();

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
      const marge = espatlles / 2 + 20 * escala + 10;

      p.createCanvas(espatlles + torax + 2 * marge, Math.max(talleEspatlles + 50, talleDavanter + llarg) + 2 * marge);
      p.background(255);
      p.stroke(0);
      p.noFill();
      
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
      p.rect(marge, 10, torax / 4,10+ talleDavanter);
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

       p.createCanvas(espatlles + torax + 2 * marge, Math.max(talleEspatlles + 50, talleDavanter + llarg) + 2 * marge);
      p.background(255);
      p.stroke(0);
      p.noFill();

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

         p.createCanvas(espatlles + torax + 2 * marge, Math.max(talleEspatlles + llargVestit + 50, talleDavanter + llargVestit) + 2 * marge);
      p.background(255);
      p.stroke(0);
      p.noFill();

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

      p.createCanvas(cadera + cintura + 2 * marge, llarg + 2 * marge);
      p.background(255);
      p.stroke(0);
      p.noFill();

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
      p.line( m2+cadera/4+B+1.5*escala ,marge+llarg, m2-1.5*escala ,marge+llarg); // baix

      p.line(marge+cadera/4-(cintura/4+3)+cintura/8,marge, marge+cadera/4-(cintura/4+3)+cintura/8+1.5*escala ,marge+11*escala ); // cint-cad
      p.line(marge+cadera/4-(cintura/4+3)+cintura/8+3*escala,marge, marge+cadera/4-(cintura/4+3)+cintura/8+1.5 *escala,marge+11*escala); // cint-cad
      p.line(m2+cadera/4-(cintura/4+3)+cintura/8,marge, m2+cadera/4-(cintura/4+3)+cintura/8+1.5*escala ,marge+11*escala ); // cint-cad
      p.line(m2+cadera/4-(cintura/4+3)+cintura/8+3*escala,marge, m2+cadera/4-(cintura/4+3)+cintura/8+1.5 *escala,marge+11*escala); // cint-cad

      // Radi del quart de cercle
const radi = B;  

// Dibuixar quart de rodona

p.arc(
  marge + cadera/4+B,          // centre X
  marge + tiro-radi,              // centre Y
  2*radi,                   // ample
  2*radi,                   // alt
  p.HALF_PI , 
  p.PI           // 270° → avall
);


p.arc(
  m2 + cadera/4+B,             // centre X
  marge + tiro-radi,              // centre Y
  2*radi,                   // ample
  2*radi,                   // alt
  p.HALF_PI , 
  p.PI
);

      
    }else if (tipus === "pantalo") {
      const cintura = mides.cintura * escala;
      const tiro = mides.tiro * escala;
      const cadera = mides.cadera * escala;
      const llarg = mides.llarg * escala;
      const llargGenoll = mides.llargGenoll * escala;
      const marge = 10*escala
      const m2 = cadera/4+cadera/10+marge+10*escala ;
      
 p.createCanvas(cadera + cintura + 2 * marge, llarg + 2 * marge);
      p.background(255);
      p.stroke(0);
      p.noFill();

      p.rect(marge, marge, cadera / 4, llarg );
      p.rect(m2, marge,cadera / 4, llarg );

      p.line(marge+cadera/4-3*escala,marge, marge + cadera/4,marge+18*escala); // cul
      p.line(m2+cadera/4,marge, m2 + cadera/4,marge+tiro-13*escala); // bragueta

     // Línia fora amb curveVertex
p.beginShape();
p.noFill();
p.curveVertex(marge+cadera/4-(cintura/4+6*escala), marge); // primer punt (repetit)
p.curveVertex(marge+cadera/4-(cintura/4+6*escala), marge); 
p.curveVertex(marge -1*escala, marge+tiro);
p.curveVertex(marge + 1.5*escala, marge+llargGenoll);
p.curveVertex(marge + 3*escala, marge+llarg);
p.curveVertex(marge + 3*escala, marge+llarg); // últim repetit
p.endShape();

// Línia entrecama amb curveVertex
p.beginShape();
p.noFill();
p.curveVertex(marge+cadera/4+cadera/10 +1*escala, marge+tiro+1*escala); 
p.curveVertex(marge+cadera/4+cadera/10 +1*escala, marge+tiro+1*escala);
p.curveVertex(marge + cadera/4+4*escala, marge+llargGenoll);
p.curveVertex(marge + cadera/4+2*escala, marge+llarg);
p.curveVertex(marge + cadera/4+2*escala, marge+llarg); 
p.endShape();

p.beginShape();
p.noFill();
p.curveVertex(m2+(cadera/4-(cintura/4+3*escala)), marge); // primer punt (repetit)
p.curveVertex(m2+(cadera/4-(cintura/4+3*escala)), marge); // primer punt (repetit)
p.curveVertex(m2 , marge+18*escala);
p.curveVertex(m2 , marge+tiro);
p.curveVertex(m2 + 1.5*escala, marge+llargGenoll);
p.curveVertex(m2 + 4*escala, marge+llarg); // últim repetit
p.curveVertex(m2 + 4*escala, marge+llarg); // últim repetit
p.endShape();

// Línia entrecama amb curveVertex
p.beginShape();
p.noFill();
p.curveVertex(m2+cadera/4+cadera/20 , marge+20*escala+cadera/20); 
p.curveVertex(m2+cadera/4+cadera/20 , marge+20*escala+cadera/20); 
p.curveVertex(m2 + cadera/4+2.5*escala, marge+llargGenoll);
p.curveVertex(m2 + cadera/4+1.5*escala, marge+llarg);
p.curveVertex(m2 + cadera/4+1.5*escala, marge+llarg); 
p.endShape();



      p.line(marge+cadera/4-(cintura/4+6*escala)+cintura/8,marge, marge+cadera/4-(cintura/4+6*escala)+cintura/8+1.5*escala ,marge+11*escala ); // pinsa
      p.line(marge+cadera/4-(cintura/4+6*escala)+cintura/8+3*escala,marge, marge+cadera/4-(cintura/4+6*escala)+cintura/8+1.5 *escala,marge+11*escala); // pinsa
      p.line(m2+cadera/4-(cintura/4+3*escala)+cintura/8,marge, m2+cadera/4-(cintura/4+3*escala)+cintura/8+1.5*escala ,marge+11*escala ); // pinsa
      p.line(m2+cadera/4-(cintura/4+3*escala)+cintura/8+3*escala,marge, m2+cadera/4-(cintura/4+3*escala)+cintura/8+1.5 *escala,marge+11*escala); // pinsa


    
p.bezier(
  marge + cadera/4 , marge + 18*escala,   // punt inicial
  marge + cadera/4 + cadera/10/3, marge + 18*escala+(tiro -18*escala)/3+2.5*escala, // control 1 
  marge + cadera/4 + 2*cadera/10/3, marge + 18*escala+2*(tiro -18*escala)/3+1.5*escala, // control 2
  marge + cadera/4 + cadera/10+1*escala, marge + tiro + 1*escala           // punt final
);

p.bezier(
m2 + cadera/4 , marge + 20*escala,   // punt inicial
m2 + cadera/4 +cadera/20/3,marge +20*escala+cadera/20/3+2.5*escala, // control 1 
m2 + cadera/4 +2*cadera/20/3,marge +20*escala +2*cadera/20/3+1.5*escala, // control 2
m2 + cadera/4 + cadera/20, marge + 20*escala + cadera/20           // punt final
);

      
      
p.stroke("red");
p.strokeWeight(6)
      p.line(marge+cadera/4-(cintura/4+6*escala),marge, marge+cadera/4-3*escala ,marge); // cint
      p.line( marge+3*escala,marge+llarg, marge+cadera/4+2*escala ,marge+llarg); // baix

      p.line(m2+cadera/4-(cintura/4+3*escala),marge, m2+cadera/4 ,marge); // cint
      p.line( m2+4*escala,marge+llarg, m2+cadera/4+1.5*escala ,marge+llarg); // baix

      
    }else if (tipus === "colls") {

 p.createCanvas(coll + 2 * marge, 6 * escala + 2 * marge);
      p.background(255);
      p.stroke(0);
      p.noFill();
      
      const coll = mides.coll * escala;
      
      p.rect(marge, marge, coll/2, 6*escala);
      
      p.line(marge+coll/2-1*escala,marge, marge+coll/2, marge+5*escala );
      p.line(marge+coll/6,marge+6*escala, marge+coll/2, marge+5*escala );




      
    }else if (tipus === "maniga") {
      const llargTotal = mides.llargTotal * escala;
      const llargBraç = mides.llargBraç * escala;
      const munyeca = mides.munyeca * escala;
      const contornBraç = mides.contornBraç * escala;
      
 p.createCanvas(contornBraç + 2 * marge, llargTotal + 2 * marge);
      p.background(255);
      p.stroke(0);
      p.noFill();

      
      p.line(marge,marge+(llargTotal-llargBraç), marge+(contornBraç/2-munyeca/2), marge+llargTotal );
      p.line(marge+contornBraç,marge+(llargTotal-llargBraç), marge+(contornBraç/2-munyeca/2)+munyeca, marge+llargTotal );
      p.rect(marge, marge, contornBraç,llargTotal);
p.stroke("red");
p.strokeWeight(6);
   

       p.point(marge+contornBraç/4,marge+(llargTotal-llargBraç)/2);
      p.point( marge+contornBraç*3/4,marge+(llargTotal-llargBraç)/2);
      p.point(marge+contornBraç/2, marge-2*escala);

p.beginShape();
p.noFill();
p.curveVertex(marge, marge + (llargTotal - llargBraç)); // primer punt (repetit)     
p.curveVertex(marge, marge + (llargTotal - llargBraç)); // primer punt (repetit)

p.curveVertex(marge+contornBraç/8, marge + (llargTotal - llargBraç)-2.5*escala); 

p.curveVertex(marge+contornBraç/4,marge+(llargTotal-llargBraç)/2); 
p.curveVertex(marge+contornBraç/4,marge+(llargTotal-llargBraç)/2); 

p.curveVertex(marge+contornBraç/8 *3,marge+2*escala);
     
p.curveVertex(marge + contornBraç / 2-1.5*escala, marge - 1.5 * escala);
p.curveVertex(marge + contornBraç / 2, marge - 2 * escala);
p.curveVertex(marge + contornBraç / 2, marge - 2 * escala);
p.curveVertex(marge + contornBraç / 2+1.5*escala, marge - 1.5 * escala);

p.curveVertex(marge + contornBraç / 2+contornBraç/8,marge+2*escala);

p.curveVertex(marge+contornBraç*3/4,marge+(llargTotal-llargBraç)/2); 
p.curveVertex(marge+contornBraç*3/4,marge+(llargTotal-llargBraç)/2);

p.curveVertex(marge+contornBraç -contornBraç/8,  marge + (llargTotal - llargBraç)-2.5*escala); // primer punt (repetit)

p.curveVertex(marge+contornBraç , marge + (llargTotal - llargBraç)); // primer punt (repetit)
p.curveVertex(marge+contornBraç , marge + (llargTotal - llargBraç)); // primer punt (repetit)

p.endShape();

     
      
    }if (tipus === "faldillaMitjaCapa") {
      const cintura = mides.cintura * escala;
      const llarg = mides.llarg * escala;
       const radi = cintura / (2 * Math.PI)*2;

            p.createCanvas(2 * radi + 2 * marge, llarg + 2 * marge);
      p.background(255);
      p.stroke(0);
      p.noFill();

    // Arc de cintura (semicercle cap avall)
    p.arc(0, marge , 2 *radi ,2*radi, 0, p.PI);
    p.arc(0 , marge , 2 * radi+llarg*2, 2 * radi+llarg*2, 0, p.PI);
    p.line(0,marge, radi+llarg, marge );
    p.line(1,marge, 1, marge+radi+llarg );

  
     
    } if (tipus === "faldillaCapaSencera") {
      const cintura = mides.cintura * escala;
      const llarg = mides.llarg * escala;
     const radi = cintura / (2 * Math.PI);

      p.createCanvas(2 * radi + 2 * marge, llarg + 2 * marge);
      p.background(255);
      p.stroke(0);
      p.noFill();


    // Arc de cintura (semicercle cap avall)
    p.arc(marge + radi+llarg , marge , 2 *radi ,2*radi, 0, p.PI);
    p.arc(marge + radi+llarg , marge , 2 * radi+llarg*2, 2 * radi+llarg*2, 0, p.PI);
    p.line(marge, marge, marge + 2 * radi*2+llarg*2, marge );
}
  };
}

// Assegura't d'incloure les biblioteques jsPDF i JSZip al teu HTML
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>

function descarregarCanvas() {
  const canvases = document.getElementsByTagName("canvas");
  if (canvases.length > 0) {
    const canvas = canvases[0];
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Dimensions d'un A4 en píxels (a 72 DPI)
    const a4Width = 595; // 21 cm
    const a4Height = 842; // 29.7 cm

    // Calcular el nombre de files i columnes
    const cols = Math.ceil(canvasWidth / a4Width);
    const rows = Math.ceil(canvasHeight / a4Height);

    // Crear un nou zip
    const zip = new JSZip();

    // Iterar sobre cada secció del canvas
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        // Crear un canvas temporal per a la secció
        const tempCanvas = document.createElement("canvas");
        const ctx = tempCanvas.getContext("2d");

        // Ajustar les dimensions del canvas temporal
        tempCanvas.width = Math.min(a4Width, canvasWidth - col * a4Width);
        tempCanvas.height = Math.min(a4Height, canvasHeight - row * a4Height);

        // Dibuixar la secció del canvas original al canvas temporal
        ctx.drawImage(
          canvas,
          col * a4Width, row * a4Height, // Posició a l'original
          tempCanvas.width, tempCanvas.height, // Dimensions a copiar
          0, 0, // Posició a l'tempCanvas
          tempCanvas.width, tempCanvas.height // Dimensions a l'tempCanvas
        );

        // Crear un nou document PDF
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF();

        // Afegir la imatge al PDF
        const imgData = tempCanvas.toDataURL("image/png");
        pdf.addImage(imgData, 'PNG', 0, 0, tempCanvas.width * 0.75, tempCanvas.height * 0.75); // Ajusta la mida si cal

        // Afegir el PDF al zip
        zip.file(`part_${row + 1}_${col + 1}.pdf`, pdf.output('blob'));
      }
    }

    // Descarregar el zip
    zip.generateAsync({ type: "blob" }).then(function(content) {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(content);
      link.download = "canvas_parts.zip"; // Nom del fitxer zip
      link.click();
    });
  }
}


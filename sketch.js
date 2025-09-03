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
  }else if (peca === "vestit") {
    mides.cadera = parseFloat(document.getElementById("caderaVestit").value);
    mides.cintura = parseFloat(document.getElementById("cinturaVestit").value);
    mides.coll = parseFloat(document.getElementById("collVestit").value);
    mides.talleEspatlles = parseFloat(document.getElementById("talleEspatllesVestit").value);
    mides.talleDavanter = parseFloat(document.getElementById("talleDavanterVestit").value);
    mides.altDePit = parseFloat(document.getElementById("altDePitVestit").value);
    mides.espatllesTotal = parseFloat(document.getElementById("espatllesTotalVestit").value);
    mides.caiguda = parseFloat(document.getElementById("caigudaVestit").value);
    mides.sisa = parseFloat(document.getElementById("sisaVestit").value);
    mides.torax = parseFloat(document.getElementById("toraxVestit").value);
    mides.pit = parseFloat(document.getElementById("pitVestit").value);
    mides.llargVestit = parseFloat(document.getElementById("llargVestit").value);

    if (isNaN(mides.llargVestit)) {
      alert("Introdueix un valor vàlid per al llarg del vestit.");
      return;
    }

  }else if (peca === "pantalo") {
    mides.cadera = parseFloat(document.getElementById("caderaPantalo").value);
    mides.cintura = parseFloat(document.getElementById("cinturaPantalo").value);
    mides.llarg = parseFloat(document.getElementById("llargPantalo").value);
    mides.tiro = parseFloat(document.getElementById("tiroPantalo").value);
    mides.genoll = parseFloat(document.getElementById("genollPantalo").value);

    if (isNaN(mides.llarg) || isNaN(mides.genoll)) {
      alert("Revisa les mides del pantaló.");
      return;
    }

  } else if (peca === "faldillaPantalo") {
    mides.cadera = parseFloat(document.getElementById("caderaPantalo").value);
    mides.cintura = parseFloat(document.getElementById("cinturaPantalo").value);
    mides.llarg = parseFloat(document.getElementById("llargPantalo").value);
    mides.tiro = parseFloat(document.getElementById("tiroPantalo").value);

    if (isNaN(mides.llarg)) {
      alert("Revisa les mides de la faldilla pantaló.");
      return;
    }

  } else if (peca === "colls") {
    mides.circumferenciaColl = parseFloat(document.getElementById("circunferenciaColl").value);

  } else if (peca === "maniga") {
    mides.llargTotal = parseFloat(document.getElementById("llargTotalManiga").value);
    mides.llargBraç = parseFloat(document.getElementById("llargBraç").value);
    mides.munyeca = parseFloat(document.getElementById("munyecaManiga").value);
    mides.sisa = parseFloat(document.getElementById("sisaManiga").value);
    mides.biceps = parseFloat(document.getElementById("bicepsManiga").value);

    if (isNaN(mides.llargTotal)) {
      alert("Revisa les mides de la màniga.");
      return;
    }

  } else if (peca === "faldillaMitjaCapa") {
    mides.cintura = parseFloat(document.getElementById("cinturaFaldillaMitjaCapa").value);
    mides.llarg = parseFloat(document.getElementById("llargFaldillaMitjaCapa").value);

    if (isNaN(mides.llarg)) {
      alert("Revisa les mides de la faldilla mitja capa.");
      return;
    }

  } else if (peca === "faldillaCapaSencera") {
    mides.cintura = parseFloat(document.getElementById("cinturaFaldillaCapaSencera").value);
    mides.llarg = parseFloat(document.getElementById("llargFaldillaCapaSencera").value);

    if (isNaN(mides.llarg)) {
      alert("Introdueix un valor vàlid per al llarg de la faldilla.");
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
    p.createCanvas(1200, 1200);
    p.background(255);
    p.stroke(0);
    p.noFill();

    if (tipus === "faldilla") {
      const cintura = mides.cintura * escala;
      const cadera = mides.cadera * escala;
      const llarg = mides.llarg * escala;
      const marge = 50;

      p.line(marge, marge, marge, marge + llarg);
      p.line(marge, marge + llarg, marge + cadera / 4 + escala, marge + llarg);
      p.line(marge, marge, marge + cintura / 4 + 4 * escala, marge);
      p.line(marge + cintura / 4 + 4 * escala, marge, marge + cadera / 4 + escala, marge + 18 * escala);
      p.line(marge + cadera / 4 + escala, marge + 18 * escala, marge + cadera / 4 + escala, marge + llarg);

      const pinçaX1 = marge + cintura / 8;
      p.line(pinçaX1, marge, pinçaX1 + 1.5 * escala, marge + 10 * escala);
      p.line(pinçaX1 + 3 * escala, marge, pinçaX1 + 1.5 * escala, marge + 10 * escala);

    } else if (tipus === "brusa") {
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
      const marge = 50;

      p.rect(50, 50, espatlles / 2, talleEspatlles);
      p.line(50 + coll / 6, 50, 50 + espatlles / 2, 50 + (talleEspatlles - caiguda));
      p.line(50, 50 + talleEspatlles, 50 + cintura / 2, 50 + talleEspatlles);

      p.stroke('green');
      p.line(50, 50 + sisa, 50, 50 + sisa + cosACintura);
      p.stroke(0);

      p.rect(marge, 50, torax / 2, talleDavanter);
      p.line(marge, 50 + altDePit, marge + pit / 2, 50 + altDePit);
      p.line(marge, 50 + talleDavanter, marge + cintura / 2, 50 + talleDavanter);

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

      p.rect(marge, 50, torax / 2, talleDavanter);
      // ...
    }
    else if (tipus === "vestit") {
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
  p.rect(10, 10, espatlles / 2, talleEspatlles+18);
    } 
    else if (tipus === "faldillaPantalo") {
      dibuixarPatroFaldillaPantalo(p, mides, escala);
    } 
    else if (tipus === "pantalo") {
      dibuixarPatroPantalo(p, mides, escala);
    } 
    else if (tipus === "colls") {
      dibuixarPatroColls(p, mides, escala);
    } 
    else if (tipus === "maniga") {
      dibuixarPatroManiga(p, mides, escala);
    } 
    else if (tipus === "faldillaMitjaCapa") {
      dibuixarPatroFaldillaMitjaCapa(p, mides, escala);
    } 
    else if (tipus === "faldillaCapaSencera") {
      dibuixarPatroFaldillaCapaSencera(p, mides, escala);
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


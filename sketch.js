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

    let midesNecessaries = [
      mides.cintura, mides.cadera, mides.tiro, mides.llarg
    ];

    if (midesNecessaries.some(v => isNaN(v))) {
      alert("Revisa que totes les mides de la faldilla-pantaló estiguin introduïdes correctament.");
      return;
    }
  } else if (peca === "coll") {
    mides.coll = parseFloat(document.getElementById("coll").value);

    let midesNecessaries = [
      mides.coll
    ];

    if (midesNecessaries.some(v => isNaN(v))) {
      alert("Revisa que totes les mides del coll estiguin introduïdes correctament.");
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

    p.createCanvas(1200, 1200);
    p.background(255);
    p.stroke(0);
    p.noFill();

    if (tipus === "faldilla") {
      const cintura = mides.cintura * escala;
      const cadera = mides.cadera * escala;
      const llarg = mides.llarg * escala;

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

      p.rect(marge, marge, espatlles / 2, talleEspatlles);
      p.line(marge + coll / 6, marge, marge + espatlles / 2, marge + (talleEspatlles - caiguda));
      p.line(marge, marge + talleEspatlles, marge + cintura / 2, marge + talleEspatlles);

      p.stroke('green');
      p.line(marge, marge + sisa, marge, marge + sisa + cosACintura);
      p.stroke(0);

      p.rect(marge, marge, torax / 2, talleDavanter);
      p.line(marge, marge + altDePit, marge + pit / 2, marge + altDePit);
      p.line(marge, marge + talleDavanter, marge + cintura / 2, marge + talleDavanter);

    } else if (tipus === "cosACadera") {
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
      const cadera = mides.cadera * escala;

      p.rect(marge, marge, torax / 2, talleDavanter);
      // afegeix aquí més detalls del dibuix...

    } else if (tipus === "vestit") {
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
      const cadera = mides.cadera * escala;
      const llarg = mides.llarg * escala;

      p.rect(marge, marge, torax / 2, talleDavanter + llarg);
      // afegeix aquí més detalls del dibuix...

    } else if (tipus === "faldillaPantalo") {
      const cintura = mides.cintura * escala;
      const tiro = mides.tiro * escala;
      const cadera = mides.cadera * escala;
      const llarg = mides.llarg * escala;

      p.rect(marge, marge, llarg, cadera / 4);
      // afegeix aquí més detalls del dibuix...
      
    }else if (tipus === "pantalo") {
      const cintura = mides.cintura * escala;
      const tiro = mides.tiro * escala;
      const cadera = mides.cadera * escala;
      const llarg = mides.llarg * escala;

      p.rect(marge, marge, llarg, cadera / 4);
      // afegeix aquí més detalls del dibuix...
      
    }else if (tipus === "coll") {
      const coll = mides.coll * escala;
      
      p.rect(marge, marge, coll, coll / 4);
      // afegeix aquí més detalls del dibuix...
      
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

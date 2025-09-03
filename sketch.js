let tipus = "";
let mides = {};

function mostrarFormulari(peca) {
  tipus = peca;

  document.getElementById("faldilla-form").style.display = "none";
  document.getElementById("camisa-form").style.display = "none";

  if (peca === "faldilla") {
    document.getElementById("faldilla-form").style.display = "block";
  } else if (peca === "camisa") {
    document.getElementById("camisa-form").style.display = "block";
  }
}

function generarPatro(peca) {
  if (peca === "faldilla") {
    mides.cintura = parseInt(document.getElementById("cinturaFaldilla").value);
    mides.cadera = parseInt(document.getElementById("caderaFaldilla").value);
    mides.llarg = parseInt(document.getElementById("llargFaldilla").value);

    if (isNaN(mides.cintura) || isNaN(mides.cadera) || isNaN(mides.llarg)) {
      alert("Si us plau, introdueix valors vàlids per a cintura, cadera i llarg.");
      return;
    }

  } else if (peca === "camisa") {
    mides.espatlles = parseInt(document.getElementById("talleEspatlles").value);
    mides.pit = parseInt(document.getElementById("pit").value);
    mides.llarg = parseInt(document.getElementById("talleDavanter").value);

    if (isNaN(mides.espatlles) || isNaN(mides.pit) || isNaN(mides.llarg)) {
      alert("Si us plau, introdueix valors vàlids per a espatlles, pit i llarg.");
      return;
    }
  }

  const container = document.getElementById("canvas-container");
  container.innerHTML = ''; // Esborra el canvas anterior
  new p5(dibuixaPatro, container);
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

      const marge = 50;

      // Davanter
      p.line(marge, marge, marge, marge + llarg); 
      p.line(marge, marge + llarg, marge + cadera / 4 + escala, marge + llarg); 
      p.line(marge, marge, marge + cintura / 4 + 4 * escala, marge); 
      p.line(marge + cintura / 4 + 4 * escala, marge, marge + cadera / 4 + escala, marge + 18 * escala); 
      p.line(marge + cadera / 4 + escala, marge + 18 * escala, marge + cadera / 4 + escala, marge + llarg); 

      // Pinça davant
      const pinçaX1 = marge + cintura / 8;
      p.line(pinçaX1, marge, pinçaX1 + 1.5 * escala, marge + 10 * escala);
      p.line(pinçaX1 + 3 * escala, marge, pinçaX1 + 1.5 * escala, marge + 10 * escala);

      // Darrere (desplaçat a la dreta)
      const sep = 200;
      const marge2 = marge + cadera / 4 + sep;

      p.line(marge2, marge, marge2, marge + llarg);
      p.line(marge2, marge + llarg, marge2 + cadera / 4 + escala, marge + llarg);
      p.line(marge2, marge, marge2 + cintura / 4 + 2 * escala, marge);
      p.line(marge2 + cintura / 4 + 2 * escala, marge, marge2 + cadera / 4 + escala, marge + 18 * escala);
      p.line(marge2 + cadera / 4 + escala, marge + 18 * escala, marge2 + cadera / 4 + escala, marge + llarg);

      // Pinça darrere
      const pinçaX2 = marge2 + cintura / 8 + escala;
      p.line(pinçaX2, marge, pinçaX2 + 1.5 * escala, marge + 10 * escala);
      p.line(pinçaX2 + 3 * escala, marge, pinçaX2 + 1.5 * escala, marge + 10 * escala);

    } else if (tipus === "camisa") {
      const pit = mides.pit * escala;
      const llarg = mides.llarg * escala;
      const espatlles = mides.espatlles * escala;

      // Cos bàsic
      p.rect(100, 100, pit, llarg);

      // Espatlles
      p.line(100, 100, 100 + espatlles, 100);
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


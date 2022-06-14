const { format } = require("prettier");

const prompt = require("prompt-sync")();

let jogoDaVelha = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.clear();
let rodadas = +prompt("Quantas rodadas vocês desejam jogar?");
let jogador1 = {};
let jogador2 = {};
let jogar = true;

function syncDelay(milliseconds) {
  var start = new Date().getTime();
  var end = 0;
  while (end - start < milliseconds) {
    end = new Date().getTime();
  }
}

let linha1 = [jogoDaVelha[0][0], jogoDaVelha[0][1], jogoDaVelha[0][2]];

let linha2 = [jogoDaVelha[1][0], jogoDaVelha[1][1], jogoDaVelha[1][2]];

let linha3 = [jogoDaVelha[2][0], jogoDaVelha[2][1], jogoDaVelha[2][2]];

function front() {
  console.log(`
  ${jogoDaVelha[0][0]}  |   ${jogoDaVelha[0][1]}   |   ${jogoDaVelha[0][2]} 
--------------------
  ${jogoDaVelha[1][0]}  |   ${jogoDaVelha[1][1]}   |   ${jogoDaVelha[1][2]} 
--------------------
  ${jogoDaVelha[2][0]}  |   ${jogoDaVelha[2][1]}   |   ${jogoDaVelha[2][2]} 
`);
}

function circulo(num) {
  num = +prompt("Pressione o número escolhido.");
  if (num === 1) {
    jogoDaVelha[0][0] = "🔴";
  } else if (num === 2) {
    jogoDaVelha[0][1] = "🔴";
  } else if (num === 3) {
    jogoDaVelha[0][2] = "🔴";
  } else if (num === 4) {
    jogoDaVelha[1][0] = "🔴";
  } else if (num === 5) {
    jogoDaVelha[1][1] = "🔴";
  } else if (num === 6) {
    jogoDaVelha[1][2] = "🔴";
  } else if (num === 7) {
    jogoDaVelha[2][0] = "🔴";
  } else if (num === 8) {
    jogoDaVelha[2][1] = "🔴";
  } else if (num === 9) {
    jogoDaVelha[2][2] = "🔴";
  }
}

function xis(num) {
  num = +prompt("Pressione o número escolhido.");
  if (num === 1) {
    jogoDaVelha[0][0] = "❌";
  } else if (num === 2) {
    jogoDaVelha[0][1] = "❌";
  } else if (num === 3) {
    jogoDaVelha[0][2] = "❌";
  } else if (num === 4) {
    jogoDaVelha[1][0] = "❌";
  } else if (num === 5) {
    jogoDaVelha[1][1] = "❌";
  } else if (num === 6) {
    jogoDaVelha[1][2] = "❌";
  } else if (num === 7) {
    jogoDaVelha[2][0] = "❌";
  } else if (num === 8) {
    jogoDaVelha[2][1] = "❌";
  } else if (num === 9) {
    jogoDaVelha[2][2] = "❌";
  }
}

let continuar;

let ponto = 0;

function Verificaganhador() {
  function menuGanhador() {
    ponto++;
    console.log("Rodada ganha!");
    console.log("Pressione ENTER para continuar");
    prompt();
    jogos.rodadas++;
    jogadas.jogadas = 0;
    jogoDaVelha = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
  }

  if (
    jogoDaVelha[0][0] === jogoDaVelha[0][1] &&
    jogoDaVelha[0][1] === jogoDaVelha[0][2]
  ) {
    menuGanhador();
  } else if (
    jogoDaVelha[1][0] === jogoDaVelha[1][1] &&
    jogoDaVelha[1][1] === jogoDaVelha[1][2]
  ) {
    menuGanhador();
  } else if (
    jogoDaVelha[2][0] === jogoDaVelha[2][1] &&
    jogoDaVelha[2][1] === jogoDaVelha[2][2]
  ) {
    menuGanhador();
  } else if (
    jogoDaVelha[0][0] === jogoDaVelha[1][0] &&
    jogoDaVelha[1][0] === jogoDaVelha[2][0]
  ) {
    menuGanhador();
  } else if (
    jogoDaVelha[0][1] === jogoDaVelha[1][1] &&
    jogoDaVelha[1][1] === jogoDaVelha[2][1]
  ) {
    menuGanhador();
  } else if (
    jogoDaVelha[0][2] === jogoDaVelha[1][2] &&
    jogoDaVelha[1][2] === jogoDaVelha[2][2]
  ) {
    menuGanhador();
  } else if (
    jogoDaVelha[0][0] === jogoDaVelha[1][1] &&
    jogoDaVelha[1][1] === jogoDaVelha[2][2]
  ) {
    menuGanhador();
  } else if (
    jogoDaVelha[2][0] === jogoDaVelha[1][1] &&
    jogoDaVelha[1][1] === jogoDaVelha[0][2]
  ) {
    menuGanhador();
  } else if (jogadas.jogadas === 9) {
    console.log();
    console.log("Vixi!!! Deu ruim...");
    console.log("Bora tentar denovo?");
    jogos.rodadas++;
    jogadas.jogadas = 0;
    jogoDaVelha = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    prompt("Bora continuar?");
  } else {
    prompt("Pressione ENTER para passar a vez...");
  }
}
let jogos = {
  rodadas: 0,
};

// Laço for que faz o cadastro de cada jogador (Nome e Escolha)
for (let n = 1; n < 3; n++) {
  console.clear();
  console.log();
  let nome = prompt(`Jogador ${n} digite o seu nome: `);

  console.log();
  let escolha = +prompt(`Jogador ${n} digite 1 para 🔴 ou 2 para ❌: `);
  while (escolha != "1" && escolha != 2) {
    escolha = +prompt(`Jogador ${n} digite 1 para 🔴 ou 2 para ❌: `);
  }
  if (n === 1) {
    jogador1.nome = nome;
    jogador1.escolha = escolha;
    jogador1.pontos = 0;
  } else if (n === 2) {
    jogador2.nome = nome;
    jogador2.escolha = escolha;
    jogador2.pontos = 0;
  }
}

let jogadas = {
  jogadas: 0,
};

while (jogos.rodadas != rodadas) {
  jogadas.jogadas++;

  //Jogador 1 sempre começa

  console.clear();
  console.log("---- 👵🏾 Jogo da mais experiente 👵🏾 ----");
  let j1 = jogador1.escolha === 1 ? "🔴" : "❌";
  let j2 = jogador2.escolha === 1 ? "🔴" : "❌";
  console.log();
  console.log(jogos.rodadas);
  console.log();
  console.log(`${j1} - ${jogador1.nome}: ${jogador1.pontos}`);
  console.log(`${j2} - ${jogador2.nome}: ${jogador2.pontos}`);
  console.log();
  console.log(`${jogador1.nome} está jogando.`);
  front();
  if (jogador1.escolha === 1) {
    circulo();
  } else if (jogador1.escolha === 2) {
    xis();
  }
  console.clear();
  console.log("---- 👵🏾 Jogo da mais experiente 👵🏾 ----");
  console.log();
  console.log(jogos.rodadas);
  console.log();
  console.log(`${j1} - ${jogador1.nome}: ${jogador1.pontos}`);
  console.log(`${j2} - ${jogador2.nome}: ${jogador2.pontos}`);
  console.log();
  console.log(`${jogador1.nome} está jogando.`);
  front();
  Verificaganhador();
  if (ponto != 0) {
    jogador1.pontos++;
    ponto = 0;
    if (jogos.rodadas === rodadas) {
      break;
    }
  }

  //jogador 2 sempre será o segundo a jogar
  jogadas.jogadas++;
  console.clear();
  console.log("---- 👵🏾 Jogo da mais experiente 👵🏾 ----");
  console.log();
  console.log(jogos.rodadas);
  console.log();
  console.log(`${j1} - ${jogador1.nome}: ${jogador1.pontos}`);
  console.log(`${j2} - ${jogador2.nome}: ${jogador2.pontos}`);
  console.log();
  console.log(`${jogador2.nome} está jogando.`);
  front();
  if (jogador2.escolha === 1) {
    circulo();
  } else if (jogador2.escolha === 2) {
    xis();
  }
  console.clear();
  console.log("---- 👵🏾 Jogo da mais experiente 👵🏾 ----");
  console.log();
  console.log(jogos.rodadas);
  console.log();
  console.log(`${j1} - ${jogador1.nome}: ${jogador1.pontos}`);
  console.log(`${j2} - ${jogador2.nome}: ${jogador2.pontos}`);
  console.log();
  console.log(`${jogador2.nome} está jogando.`);
  front();
  Verificaganhador();
  if (ponto != 0) {
    jogador2.pontos++;
    ponto = 0;
    if (jogos.rodadas === rodadas) {
      break;
    }
  }
}
console.clear();
console.log("Fim de jogo!");
if (jogador1.pontos > jogador2.pontos) {
  console.clear();
  console.log("---- 👵🏾 Jogo da mais experiente 👵🏾 ----");
  console.log();
  console.log(
    `O jogador 1, ${jogador1.nome}, é o grande vencedor com ${jogador1.pontos} pontos.`
  );
  console.log("Parabéns!!!");
  console.log();
} else if (jogador1.pontos < jogador2.pontos) {
  console.clear();
  console.log("---- 👵🏾 Jogo da mais experiente 👵🏾 ----");
  console.log();
  console.log(
    `O jogador 2, ${jogador2.nome}, é o grande vencedor com ${jogador2.pontos} pontos.`
  );
  console.log("Parabéns!!!");
  console.log();
} else if (jogador1.pontos === jogador2.pontos) {
  console.log();
  console.log("Parabéns!!!");
  console.log();
  console.log(`Vocês dois empataram com ${jogador1.pontos} pontos`);
  console.log();
} else if (jogador1.pontos === 0 && jogador2.pontos === 0) {
  console.clear();
  console.log("---- 👵🏾 Jogo da mais experiente 👵🏾 ----");
  console.log();
  console.log();
  console.log("Poxa, vida!");
  console.log("Infelizmente, ninguém ganhou...");
  console.log();
  console.log("Tentem novamente. 😉");
  console.log();
}

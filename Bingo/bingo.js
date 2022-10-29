//Creamos las variables necesarias para nuestro programa, asi como un ranking con jugadores falsos para probar la funcion.

const bingoCard = [];
let turnsCounter = 0;
let lineCounter = 0;
let playerName = "Player1";
let alreadyTaken = [];
const pastNumbers = [];
let nextNumber = 0;
let wins = 0;
const ranking = [
  {
    name: "FakePlayer1",
    score: 1,
  },
  {
    name: "FakePlayer2",
    score: 50,
  },
];

//creamos la funcion bingo que recorrera el resto de nuestras funciones y que reiniciara las variables si queremos volver a jugar.

const bingo = () => {
  PlayerName = prompt("Welcome to ISDI Coders Bingo. What's your name?");
  let instructions = confirm(
    `Dear ${PlayerName} , you have to complete your cardboard the less turns the better. You have 90 points now and you will lose 1 each turn. Do you want to want to play? `
  );
  if (instructions === true) {
    cardSelector();
    bingoTurn();
    console.log(`You completed the game in ${turnsCounter} turns`);
    showRanking();
    let replay = confirm("Do you want to keep playing?");
    if (replay === true) {
      turnsCounter = 0;
      lineCounter = 0;
      alreadyTaken.length = 0;
      turnsCounter = 0;
      bingoCard.length = 0;
      pastNumbers.length = 0;
      wins = 0;
      bingo();
    }
  }
};

//Creamos una funcion que genera tres lineas de 5 numeros aleatorios, que seran siempre unicos.

const cardGenerator = () => {
  let line = [];
  while (line.length < 5) {
    let cardNumber = Math.floor(Math.random() * (90 - 1 + 1)) + 1;

    if (!alreadyTaken.includes(cardNumber)) {
      line.push(cardNumber);
      alreadyTaken.push(cardNumber);
    }
    if (line.length === 5) {
      bingoCard.push(line);
      if (bingoCard.length === 3) {
        return;
      }
      cardGenerator();
    }
  }
};

// Creamos una funcion que nos muestra nuestra tarjeta de bingo y nos permite jugar con ella o generar otra.

const cardSelector = (choice) => {
  cardGenerator();
  choice = prompt(
    `Dear ${playerName}, here are your numbers ${bingoCard}. Do you want to keep this card and play?: y/n`
  );
  switch (choice) {
    case "y":
      console.log("lets play");
      break;
    case "n":
      bingoCard.pop();
      cardGenerator();
      break;
    default:
      cardGenerator();
  }
};

// Creamos una funcion que comprueba si el numero del bombo esta en nuestro carton, y de ser asi nos avisa y lo sustituye por una X.

const cardChecker = () => {
  for (i = 0; i < bingoCard.length; i++) {
    if (bingoCard[i].includes(nextNumber)) {
      alert("You have the winner number!");
      bingoCard[i][bingoCard[i].indexOf(nextNumber)] = "X";
      alert(`${bingoCard}`);
    }
  }
};

// Creamos una funcion que genera el numero del bombo y ejecuta comprobaciones para ver si dicho numero esta en nuestro carton y si es suficiente para cantar bingo o linea.

const bingoTurn = () => {
  jackpotNumber();
  cardChecker();
  lineChecker();
  bingoChecker();
  while (wins === 0) {
    let nextTurn = confirm("Do you want to play another turn?");
    if (nextTurn === true) {
      bingoTurn();
    } else {
      return;
    }
  }
};

// Funcion que genera numeros aleatorios del bombo, siempre unicos.

const jackpotNumber = () => {
  nextNumber = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
  switch (pastNumbers.includes(nextNumber)) {
    case true:
      jackpotNumber();
      break;
    case false:
      pastNumbers.push(nextNumber);
      turnsCounter += 1;
      alert(`The new number is ${nextNumber}`);
      break;
  }
};

// Funcion que comprueba si podemos cantar linea.

const lineChecker = () => {
  for (element of bingoCard) {
    if (element.every((value) => value === "X")) {
      if (lineCounter === 0) {
        alert("Line!");
      }
      lineCounter += 1;
    }
  }
};

// Funcion que comprueba si podemos cantar bingo.

const bingoChecker = () => {
  if (
    bingoCard[0].every((value) => value === "X") &&
    bingoCard[1].every((value) => value === "X") &&
    bingoCard[2].every((value) => value === "X")
  ) {
    alert("BINGO! HAS GANADO!");
    wins = +1;
    ranking.push({
      name: PlayerName,
      score: 91 - turnsCounter,
    });
  }
};

//Funcion que ordena y muestra el ranking de jugadores al final de nuestra partida.

const showRanking = () => {
  let orderedRank = ranking.sort((a, b) => b.score - a.score);
  console.log(orderedRank);
};

bingo();

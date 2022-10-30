let points = 0
let wrongAnswers = 0
let userName
let currentPositionLetter = 0
let listOfWords
const maxTime = 240
let timeLeft = maxTime

const rankingOfPlayers = [{ name: "default_player", points: 5 }]
const questions = [
  {
    letter: "a",
    answer: ["anotar", "alopecia"],
    status: 0,
    question: [
      `CON LA A.</br> Poner notas en un escrito, una cuenta o un libro`,
      "CON LA A.</br> Caída o pérdida patológica del pelo",
    ],
  },
  {
    letter: "b",
    answer: ["babuino", "bueno"],
    status: 0,
    question: [
      "CON LA B.</br> Mono cinocéfalo africano que puede alcanzar unos 75 cm de altura y cuyo pelaje es de color marrón oliváceo",
      "CON LA B.</br> Útil y a propósito para algo",
    ],
  },
  {
    letter: "c",
    answer: ["catarsis", "coacción"],
    status: 0,
    question: [
      "CON LA C.</br> Purificación, liberación o transformación interior suscitadas por una experiencia vital profunda",
      "CON LA C.</br> Fuerza o violencia que se hace a alguien para obligarlo a que diga o ejecute algo",
    ],
  },
  {
    letter: "d",
    answer: ["don", "dormir"],
    status: 0,
    question: [
      "CON LA D.</br> Gracia especial o habilidad para hacer algo",
      "CON LA D.</br> Hallarse en el estado de reposo que consiste en la inacción o suspensión de los sentidos y de todo movimiento voluntario",
    ],
  },
  {
    letter: "e",
    answer: ["electricidad", "estima"],
    status: 0,
    question: [
      "CON LA E.</br> Fuerza que se manifiesta por la atracción o repulsión entre partículas cargadas, originada por la existencia de electrones y protones",
      "CON LA E.</br> Consideración y aprecio que se hace de alguien o algo por su calidad y circunstancias",
    ],
  },
  {
    letter: "f",
    answer: ["final", "fresco"],
    status: 0,
    question: [
      "CON LA F.</br> Que termina o cierra",
      "CON LA F.</br> Moderadamente frío",
    ],
  },
  {
    letter: "g",
    answer: ["grande", "gasto"],
    status: 0,
    question: [
      "CON LA G.</br> Que supera en tamaño, importancia, dotes, intensidad, etc., a lo común y regular",
      "CON LA G.</br> Acción de gastar",
    ],
  },
  {
    letter: "h",
    answer: ["hobby", "huella"],
    status: 0,
    question: [
      "CON LA H.</br> Actividad que, como afición o pasatiempo favorito, se practica habitualmente en los ratos de ocio",
      "CON LA H.</br> Señal que deja el pie del hombre o del animal en la tierra por donde pasa",
    ],
  },
  {
    letter: "i",
    answer: ["idolatrar", "ira"],
    status: 0,
    question: [
      "CON LA I.</br> Amar o admirar con exaltación a alguien o algo",
      "CON LA I.</br> Sentimiento de indignación que causa enojo",
    ],
  },
  {
    letter: "j",
    answer: ["julio", "justificar"],
    status: 0,
    question: [
      "CON LA J.</br> Séptimo mes del año, que tiene 31 días",
      "CON LA J.</br> Probar algo con razones convincentes, testigos o documentos",
    ],
  },
  {
    letter: "k",
    answer: ["kétchup", "kilocaloría"],
    status: 0,
    question: [
      "CON LA K.</br> Salsa de tomate condimentada con vinagre, azúcar y especias",
      "CON LA K.</br> Unidad de energía equivalente a 1000 calorías",
    ],
  },
  {
    letter: "l",
    answer: ["labia", "levantar"],
    status: 0,
    question: [
      "CON LA L.</br> Verbosidad persuasiva y gracia en el hablar",
      "CON LA L.</br> Mover hacia arriba algo",
    ],
  },
  {
    letter: "m",
    answer: ["misterio", "morder"],
    status: 0,
    question: [
      "CON LA M.</br> Cosa arcana o muy recóndita, que no se puede comprender o explicar",
      "CON LA M.</br> Clavar los dientes en algo",
    ],
  },
  {
    letter: "n",
    answer: ["necio", "nipón"],
    status: 0,
    question: [
      "CON LA N.</br> Ignorante y que no sabe lo que podía o debía saber",
      "CON LA N.</br> Natural del Japón, país de Asia",
    ],
  },
  {
    letter: "ñ",
    answer: ["extraño", "coño"],
    status: 0,
    question: [
      "CONTIENE LA Ñ.</br> De nación, familia o profesión distinta de la que se nombra o sobrentiende, en contraposición a propio",
      "CONTIENE LA Ñ.</br> Vulva y vagina del aparato genital femenino",
    ],
  },
  {
    letter: "o",
    answer: ["osadía", "oriundo"],
    status: 0,
    question: [
      "CON LA O.</br> Atrevimiento, resolución",
      "CON LA O.</br> Que trae su origen de algún lugar",
    ],
  },
  {
    letter: "p",
    answer: ["protón", "pilar"],
    status: 0,
    question: [
      "CON LA P.</br> Partícula con carga eléctrica positiva, que forma parte del núcleo del átomo",
      "CON LA P.</br> Elemento estructural resistente, de sección poligonal o circular, con función de soporte",
    ],
  },
  {
    letter: "q",
    answer: ["quinto", "quesadilla"],
    status: 0,
    question: [
      "CON LA Q.</br> Que ocupa en una serie el lugar número cinco",
      "CON LA Q.</br> Tortilla de maíz o de trigo doblada por la mitad, rellena a veces de queso y a veces de otros ingredientes, propia de la cocina mexicana",
    ],
  },
  {
    letter: "r",
    answer: ["ratón", "risa"],
    status: 0,
    question: [
      "CON LA R.</br> Roedor",
      "CON LA R.</br> Movimiento de la boca y otras partes del rostro, que demuestra alegría",
    ],
  },
  {
    letter: "s",
    answer: ["soso", "sobrepeso"],
    status: 0,
    question: [
      "CON LA S.</br> Que no tiene sal, o tiene poca",
      "CON LA S.</br> Exceso de peso",
    ],
  },
  {
    letter: "t",
    answer: ["tranquilo", "torta"],
    status: 0,
    question: [
      "CON LA T.</br> Quieto, sosegado, pacífico",
      "CON LA T.</br> Bofetada en la cara",
    ],
  },
  {
    letter: "u",
    answer: ["urinario", "único"],
    status: 0,
    question: [
      "CON LA U.</br> Lugar destinado para orinar y en especial el dispuesto para el público en calles, teatros, etc",
      "CON LA U.</br> Solo y sin otro de su especie",
    ],
  },
  {
    letter: "v",
    answer: ["votar", "volar"],
    status: 0,
    question: [
      "CON LA V.</br> Aprobar por votación",
      "CON LA V.</br>Ir o moverse por el aire, sosteniéndose con las alas",
    ],
  },
  {
    letter: "w",
    answer: ["sandwich", "washington"],
    status: 0,
    question: [
      "CONTIENE LA W.</br> Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
      "CONTIENE LA W.</br> Ciudad de los Estados Unidos situada en el estado de Columbia",
    ],
  },
  {
    letter: "x",
    answer: ["ántrax", "vigorexia"],
    status: 0,
    question: [
      "CONTIENE LA X.</br> Inflamación confluente de varios folículos pilosos, de origen bacteriano, con abundante producción de pus",
      "CONTIENE LA X.</br> Obsesión patológica por desarrollar la musculatura",
    ],
  },
  {
    letter: "y",
    answer: ["poya", "yuan"],
    status: 0,
    question: [
      "CONTIENE LA Y.</br> Derecho que se pagaba, en pan o en dinero, en el horno común",
      "CON LA Y.</br> Unidad monetaria de China",
    ],
  },
  {
    letter: "z",
    answer: ["zen", "zarzuela"],
    status: 0,
    question: [
      "CON LA Z.</br> Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
      "CON LA Z.</br> Obra dramática y musical de origen español en que alternativamente se habla y se canta",
    ],
  },
]

// DECLARE DOM ELEMENTS

const startButton = document.getElementById("start-button")
const insertWordButton = document.getElementById("insert-word")
const nextWordButton = document.getElementById("next-word")
const questionEL = document.querySelector(".questions__title")
const userNameEl = document.querySelector(".new-game__input")
const answerEL = document.querySelector(".questions__input")
const endGameButton = document.getElementById("end-game")
const repeatGameButton = document.getElementById("repeat-button")
const countDownEl = document.querySelector(".questions__time--circle")
const showAnswerEL = document.querySelector(".questions__show-answer")
let circleLetterEL = document.querySelectorAll(".circle__letter")

// DECLARE DIVS

const newGameDiv = document.querySelector(".new-game")
const questionsDiv = document.querySelector(".questions")
const endGameDiv = document.querySelector(".end-game")

// ADD EVENT LISTENERS

startButton.addEventListener("click", getUserNameAndStartGame)

insertWordButton.addEventListener("click", insertWord)
nextWordButton.addEventListener("click", nextWord)

repeatGameButton.addEventListener("click", resetGame)
endGameButton.addEventListener("click", () => {
  timeLeft = 0
})
answerEL.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault()
    document.getElementById("insert-word").click()
  }
})
userNameEl.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault()
    document.getElementById("start-button").click()
  }
})

// FUNCTIONS

function getUserNameAndStartGame() {
  userName = userNameEl.value
  answerEL.focus()
  if (userName.length > 0) {
    newGameDiv.style.display = "none"
    endGameDiv.style.display = "none"
    questionsDiv.removeAttribute("style")
    document.querySelector(".questions__name").innerHTML =
      "Jugador:   " + userName
    startGame()
  } else {
    return
  }
}

function getCurrenPositiontLetter() {
  currentPositionLetter++

  if (currentPositionLetter > questions.length - 1) {
    currentPositionLetter = 0
  }

  if (questions.every((question) => question.status !== 0)) {
    checkEndGame()
    return
  }
  if (
    questions[currentPositionLetter].status === 1 ||
    questions[currentPositionLetter].status === 2
  )
    getCurrenPositiontLetter()
}

function insertWord() {
  let answer = answerEL.value
  if (answer) {
    checkAnswer(answer)
    getCurrenPositiontLetter()
    addClassesToCircle()
    paintQuestion()
    if (questions.every((question) => question.status !== 0)) {
      circleLetterEL.forEach((letter) => {
        letter.classList.remove("circle__letter--active")
      })
    }
  }
  answerEL.value = ""
  answerEL.focus()
}
function nextWord() {
  answerEL.value = ""
  showAnswerEL.innerHTML = "¡PASAPALABRA!"
  answerEL.focus()
  getCurrenPositiontLetter()
  addClassesToCircle()
  paintQuestion()

  checkEndGame()
}

function paintQuestion() {
  questionEL.innerHTML = questions[currentPositionLetter].question[listOfWords]
}

function addClassesToCircle() {
  //remove all clases
  circleLetterEL.forEach((circle) => {
    circle.classList.remove("circle__letter--active")
  })
  circleLetterEL[currentPositionLetter].classList.add("circle__letter--active")

  questions.forEach((question, index) => {
    if (question.status === 1) {
      circleLetterEL[index].classList.add("circle__letter--correct")
    } else if (question.status === 2) {
      circleLetterEL[index].classList.add("circle__letter--wrong")
    }
  })
}

function getUserAnswer() {
  let userAnswer = answerEL.value
  if (answerEL.value !== "") {
    answerEL.value = ""
    answerEL.focus()
    return userAnswer
  } else {
    answerEL.focus()
    showAnswerEL.innerHTML = "Por favor, introduce una respuesta"
  }
}

function checkAnswer(userAnswer) {
  if (
    userAnswer.toLowerCase() ===
    questions[currentPositionLetter].answer[listOfWords]
  ) {
    questions[currentPositionLetter].status = 1
    showAnswerEL.innerHTML = "¡ACERTASTE!"
  } else {
    questions[currentPositionLetter].status = 2
    showAnswerEL.innerHTML =
      "¡INCORRECTO!" +
      " La respuesta correcta era: " +
      questions[currentPositionLetter].answer[listOfWords]
  }
}

function createCircle() {
  // Make from stackoverflow https://stackoverflow.com/questions/16613809/how-to-create-circles-around-a-circle-with-css-javascript
  let div = 360 / 27
  let radius = 190
  let parentdiv = document.querySelector(".circle")
  let offsetToParentCenter = parseInt(parentdiv.offsetWidth / 2) //assumes parent is square
  let offsetToChildCenter = 20
  let totalOffset = offsetToParentCenter - offsetToChildCenter

  for (let i = 0; i <= 26; ++i) {
    let childdiv = document.createElement("div")
    childdiv.className = "circle__letter"
    childdiv.innerText = questions[i].letter.toUpperCase()
    childdiv.style.position = "absolute"
    childdiv.style.rotate = "90deg"
    let y = Math.sin(div * i * (Math.PI / 180)) * radius
    let x = Math.cos(div * i * (Math.PI / 180)) * radius
    childdiv.style.top = (y + totalOffset).toString() + "px"
    childdiv.style.left = (x + totalOffset).toString() + "px"
    parentdiv.appendChild(childdiv)
  }
}

function countDownTimer() {
  timeLeft = maxTime
  let timer = setInterval(() => {
    timeLeft--
    console.log(timeLeft)
    if (timeLeft <= 0) {
      clearInterval(timer)
      endGame()
    }

    countDownEl.innerHTML = timeLeft
  }, 1000)
}

function startGame() {
  //Random num to choose the question
  listOfWords = Math.trunc(Math.random() * 2)

  addClassesToCircle()
  paintQuestion()
  countDownTimer()
  answerEL.focus()

  endGameButton.removeAttribute("style")
}
function checkEndGame() {
  if (questions.every((question) => question.status !== 0)) {
    timeLeft = 0
    questionsDiv.style.display = "none"
  }
}
function endGame() {
  let correctAnswers = questions.filter(
    (question) => question.status === 1
  ).length
  circleLetterEL.forEach((circle) => {
    circle.classList.remove("circle__letter--active")
  })

  let incorrectAnswers = questions.filter(
    (question) => question.status === 2
  ).length
  document.querySelector(".end-game__title").innerHTML =
    correctAnswers === questions.length
      ? "¡ENHORABUENA, HAS HECHO PASAPALABRA!"
      : "¡NO LO HAS CONSEGUIDO!"
  if (timeLeft === 0) {
    document.querySelector(".end-game__title").innerHTML =
      "¡SE TE HA ACABADO EL TIEMPO!"
  }
  document.querySelector(".end-game__subtitle").innerHTML =
    "Has tenido " +
    correctAnswers +
    " aciertos y " +
    incorrectAnswers +
    " fallos"
  questionsDiv.style.display = "none"
  newGameDiv.style.display = "none"
  endGameDiv.removeAttribute("style")
  endGameButton.style.display = "none"

  rankingOfPlayers.push({
    name: userName,
    points: correctAnswers,
  })
  let orderedRanking = rankingOfPlayers.sort((a, b) => b.points - a.points)
  let rankingHTML = orderedRanking
    .map((player) => `<p>${player.name} - ${player.points}</p>`)
    .join(" ")
  document.querySelector(
    ".end-game__ranking"
  ).innerHTML = `Ranking:</div> <p></p> ${rankingHTML} `
}
function resetGame() {
  questionsDiv.style.display = "none"
  endGameDiv.style.display = "none"
  newGameDiv.removeAttribute("style")

  questions.forEach((question) => {
    question.status = 0
  })
  circleLetterEL.forEach((circle) => {
    circle.classList.remove("circle__letter--correct")
    circle.classList.remove("circle__letter--wrong")
    circle.classList.remove("circle__letter--active")
  })
  currentPositionLetter = 0
  //timeLeft = 0
  countDownEl.innerHTML = maxTime
  showAnswerEL.innerHTML = ""
  userNameEl.value = ""

  endGameButton.style.display = "none"
}

function startApp() {
  resetGame()
  createCircle()
  circleLetterEL = document.querySelectorAll(".circle__letter")
}

// start the app

startApp()
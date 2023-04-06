let button = document.querySelector("#start");
let startGame = document.querySelector("#start-game");
let appDiv = document.querySelector(".app-div");
let div1 = document.querySelector("#jedan");
let div2 = document.querySelector("#dva");
let div3 = document.querySelector("#tri");
let div4 = document.querySelector("#cetiri");
let div5 = document.querySelector("#pet");
let div6 = document.querySelector("#sest");
let h1 = document.querySelector(".h1");
let h4 = document.querySelector("#textObjasnjenje");
let naslov = document.querySelector("#objasnjenje");
let startResult = document.querySelector("#startNumber");
let outputScreen = document.querySelector("#outputScreen");
let calculator = document.querySelector(".calculator");
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numBigNumber = [10, 15, 20, 25, 50, 75, 100];
let clickCount = 0;
let arr = [];
let copyArr = [];
let bigNumberArr = [];
let copyBigNumberArr = [];

let findNumber = Math.floor(Math.random() * 330);
h1.innerHTML = `Pronadji broj <div class="findNumber"> ${findNumber} </div>`;

button.addEventListener("click", start);
function start() {
  let randomLengthBigNumber = Math.floor(Math.random() * numBigNumber.length);
  let randomBigNumber = numBigNumber[randomLengthBigNumber];
  let random = Math.floor(Math.random() * num.length);
  let ranNumber = num[random];
  arr.push(ranNumber);
  bigNumberArr.push(randomBigNumber);

  if (div1.innerHTML == "") {
    div1.classList.remove("animacija");
    div2.classList.add("animacija");
    div1.innerHTML = `${arr}`;
  } else {
    //EMPTY
  }

  if (clickCount == 1) {
    div2.classList.remove("animacija");
    div3.classList.add("animacija");
    div2.innerHTML = `${arr[1]}`;
    clickCount = 0;
  } else {
    clickCount++;
  }

  if (arr.length > 2) {
    div3.classList.remove("animacija");
    div3.innerHTML = `${arr[2]}`;
    div3.classList.remove("hide");
    div4.classList.add("animacija");
  } else {
    //EMPTY
  }

  if (arr.length > 3) {
    div4.classList.remove("animacija");
    div4.innerHTML = `${arr[3]}`;
    div5.classList.add("animacijaVelikihBrojevi");
  }
  if (arr.length > 4) {
    div5.innerHTML = `${bigNumberArr[1]}`;
    div5.classList.remove("animacijaVelikihBrojevi");
    div6.classList.add("animacijaVelikihBrojevi");
  }

  if (bigNumberArr.length > 5) {
    div6.innerHTML = `${bigNumberArr[2]}`;
    div6.classList.remove("animacijaVelikihBrojevi");
    button.setAttribute("disabled", "true");
    calculator.classList.remove("hide");
  } else {
  }
}

function objasnjenje() {
  let tekst = document.getElementById("textObjasnjenje");
  tekst.classList.toggle("hide");
}

function display(e) {
  outputScreen.value += e;
}

function Calculate() {
  const allNumbers = [
    div1.innerHTML,
    div2.innerHTML,
    div3.innerHTML,
    div4.innerHTML,
    div5.innerHTML,
    div6.innerHTML,
  ];

  const enteredNumbers = outputScreen.value.match(/\d+/g);
  if (
    enteredNumbers.every((everyNumber) => {
      return allNumbers.includes(everyNumber);
    })
  ) {
    try {
      outputScreen.value = eval(outputScreen.value);
      alert("Cestitamo! Pogodli ste tacan broj!");
      location.reload();
    } catch (err) {
      console.log("err");
    }
  } else {
    alert(
      "Zao nam je, niste pobedili!!Broj koji ste uneli ne pripada grupi vasih izabranih brojeva, probajte ponovo"
    );
    location.reload();
  }
}

function Clear() {
  outputScreen.value = "";
}

function del() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}

// new game slagalica
// main.js
let startSkockoG = document.querySelector(".start-skocko-game");
let containerQuizSkocko = document.querySelector(".container-quiz-skocko")
let slagalica = document.querySelector("#slagalica");
let containerSlagalice = document.querySelector(".container-slagalica");
slagalica.addEventListener("click", slagalicaGame);
function slagalicaGame() {
  containerSlagalice.classList.remove("hide");
  calculator.classList.add("hide");
  appDiv.classList.add("hide");
  naslov.classList.add("hide");
  slagalica.style.display = "none";
  startSkockoG.classList.remove("hide");
};

let skockoBtn = document.querySelector(".skockoBtn")
startSkockoG.addEventListener("click", startGameSkocko);
function startGameSkocko() {
  containerSlagalice.classList.remove("hide");
  calculator.classList.add("hide");
  appDiv.classList.add("hide");
  naslov.classList.add("hide");
  containerSlagalice.classList.add("hide");
  containerQuizSkocko.classList.remove("hide");
  skockoBtn.classList.remove("hide");
  document.body.style.backgroundColor = "white";
  alert("Click on 4 images and click confirm to start the game. More or less than 4 images will not be valid and you will not be able to click confirm. The red circle means you have guessed one image correctly and it's in the correct position, the yellow circle means you have guessed an image correctly but it's not in the correct position. The black circle means you have not guessed the image or the position correctly. Watch how to play on Youtube Slagalica-skocko")
}

let a1 = document.querySelector(".top-left1");
let a2 = document.querySelector(".top-left2");
let a3 = document.querySelector(".top-left3");
let a4 = document.querySelector(".top-left4");
let aKonacno = document.querySelector(".top-left-konacno");
let b1 = document.querySelector(".top-right1");
let b2 = document.querySelector(".top-right2");
let b3 = document.querySelector(".top-right3");
let b4 = document.querySelector(".top-right4");
let bKonacno = document.querySelector(".top-right-konacno");
a1.addEventListener("click", showTextA);
a2.addEventListener("click", showTextA);
a3.addEventListener("click", showTextA);
a4.addEventListener("click", showTextA);
aKonacno.addEventListener("keyup", showResA);

const answers = [
  {
    a1: "SPRING BOOT",
    a2: "JDBC",
    a3: "OLD LANGUAGE",
    a4: "SPRING FRAMEWORK",
    aKonacno: "JAVA",
    b1: "TYPESCRIPT",
    b2: "JAVASKRIPT",
    b3: "FRAMEWORK",
    b4: "GOOGLE",
    bKonacno: "ANGULAR",
    C1: "CSS",
    C2: "STYLE",
    C3: "LAYOUT",
    C4: "BOOTSTRAP",
    cKonacno: "WEB",
    D1: "REACT",
    D2: "VUE",
    D3: "ANGULAR",
    D4: "EMBER",
    dKonacno: "JAVASCRIPT",
    finallRes: "PROGRAMING LANGUAGE",
  },
  {
    a1: "VEZ",
    a2: "PESAK",
    a3: "NOVAC",
    a4: "MALI",
    aKonacno: "SITAN",
    b1: "MIS",
    b2: "ORAO",
    b3: "ZID",
    b4: "MEDVED",
    bKonacno: "BELI",
    C1: "GRADJA",
    C2: "PEGLANJE",
    C3: "GLAVA",
    C4: "POD",
    cKonacno: "DASKA",
    D1: "TALASI",
    D2: "JAHANJE",
    D3: "INTERNET",
    D4: "DASKA",
    dKonacno: "SURFOVANJE",
    finallRes: "SNEG",
  },
  {
    a1: "SALATA",
    a2: "JUG",
    a3: "POVRCE",
    a4: "MANGO",
    aKonacno: "VOCE",
    b1: "INDUSTRIJA",
    b2: "KOREN",
    b3: "ORAH",
    b4: "GRADJA",
    bKonacno: "DRVO",
    C1: "BEOGRAD",
    C2: "NOVI SAD",
    C3: "ZBOGOM",
    C4: "NIS",
    cKonacno: "SRBIJA",
    D1: "KRALJICA",
    D2: "KUP NACIJA",
    D3: "UNIJA",
    D4: "MALI",
    dKonacno: "AFRIKA",
    finallRes: "SLJIVA",
  },
];

const randomQuestionIndex = Math.floor(Math.random() * answers.length);
const randomQuestion = answers[randomQuestionIndex];
console.log(randomQuestion);

function showResA(e) {
  aKonacno = e.target.value;
  console.log(aKonacno);
  if (e.key === "Enter" && e.target.value === randomQuestion.aKonacno) {
    alert("uspesno pogodjeno polje");
    e.target.setAttribute("readonly", true);
  }
  if (e.key === "Enter" && e.target.value !== randomQuestion.aKonacno) {
    alert("nije pogodjeno");
    e.target.value = "";
  } else {
  }
}

function showTextA(e) {
  switch (e.target) {
    case a1:
      a1.innerHTML = `${randomQuestion.a1}`;
      break;
    case a2:
      a2.innerHTML = `${randomQuestion.a2}`;
      break;
    case a3:
      a3.innerHTML = `${randomQuestion.a3}`;
      break;
    case a4:
      a4.innerHTML = `${randomQuestion.a4}`;
    default:
  }
}

function showTextB(e) {
  switch (e.target) {
    case b1:
      b1.innerHTML = `${randomQuestion.b1}`;
      break;
    case b2:
      b2.innerHTML = `${randomQuestion.b2}`;
      break;
    case b3:
      b3.innerHTML = `${randomQuestion.b3}`;
      break;
    case b4:
      b4.innerHTML = `${randomQuestion.b4}`;
    default:
  }
}

function showResB(e) {
  bKonacno = e.target.value;
  if (e.key === "Enter" && e.target.value === randomQuestion.bKonacno) {
    console.log("dobro je");
    e.target.setAttribute("readonly", true);
  }
  if (e.key === "Enter" && e.target.value !== randomQuestion.bKonacno) {
    e.target.value = "";
    console.log("nije dobro");
  }
}

const cAllDivs = document.querySelectorAll(".bottom-right div");
cAllDivs.forEach((cDivAll) => {
  cDivAll.addEventListener("click", (event) => {
    console.log(cDivAll);
    let clicedDiv = event.target;
    let questionId = clicedDiv.innerHTML;
    let answer = randomQuestion[questionId];
    clicedDiv.innerHTML = `${answer}`;
  });
});

let cKonacno = document.querySelector(".bottom-right-konacno");
function showResC(e) {
  cKonacno = e.target.value;
  let cQuestionsFinaly = randomQuestion.cKonacno;
  console.log(cQuestionsFinaly);
  if (e.key === "Enter" && cKonacno !== cQuestionsFinaly) {
    e.target.value = "";
    console.log("nije dobro");
  }
  if (e.key === "Enter" && cKonacno === cQuestionsFinaly) {
    console.log("dobro je");
    e.target.setAttribute("readonly", true);
  }
}

let dAllDivs = document.querySelectorAll(".bottom-left div");
dAllDivs.forEach((allDivsD) => {
  allDivsD.addEventListener("click", (event) => {
    let clicedDiv = event.target;
    let questionsId = clicedDiv.innerHTML;
    clicedDiv.innerHTML = randomQuestion[questionsId];
  });
});

let dKonacno = document.querySelector(".bottom-left-konacno");
dKonacno.addEventListener("keyup", showResD);
function showResD(e) {
  dKonacno = e.target.value;
  if (e.key === "Enter" && dKonacno === randomQuestion.dKonacno) {
    console.log("pogodjeno");
    e.target.setAttribute("readonly", true);
  }
  if (e.key === "Enter" && dKonacno !== randomQuestion.dKonacno) {
    console.log("nije dobro");
    e.target.value = "";
  }
}

let finallRes = document.querySelector(".konacnoresenje");
function showFinallRes(e) {
  finallRes = e.target.value;
  if (e.key === "Enter" && finallRes === randomQuestion.finallRes) {
    console.log("dobro je");
    e.target.setAttribute("readonly", true);
  }
  if (e.key === "Enter" && finallRes !== randomQuestion.finallRes) {
    console.log("nije dobro");
    e.target.value = "";
  }
}


//skocko-start
const signArr = [
  { id: 1, name: "karo", imageUrl: "./images/karo.jpg" },
  { id: 2, name: "pik", imageUrl: "./images/pik.jpg" },
  { id: 3, name: "skocko", imageUrl: "./images/skocko.jpg" },
  { id: 4, name: "srce", imageUrl: "./images/srce.jpg" },
  { id: 5, name: "tref", imageUrl: "./images/tref.jpg" },
  { id: 6, name: "zvezda", imageUrl: "./images/zvezda.jpg" },
];

const fieldNumber = 4;
const finalCombination = [];

for (let i = 0; i < fieldNumber; i++) {
  let randomIndex = Math.floor(Math.random() * signArr.length);
  let final = signArr[randomIndex];
  finalCombination.push(final.id);
}

console.log(finalCombination);
let signsContainer = document.getElementById("signs-container");
const signsHtml = signArr
  .map(
    (sign) => `
    <img class="sign" data-id="${sign.id}" src="${sign.imageUrl}"  alt="${sign.name}">
`
  )
  .join("");

signsContainer.innerHTML = signsHtml;
let customerResult = [];

let div1Skocko = document.querySelector(".arr1-1");
let izbrisi = document.querySelector(".izbrisi-skocko");
let divSign = document.querySelectorAll(".sign");
divSign.forEach((divSignsId) => {
  divSignsId.addEventListener("click", (event) => {
    let clicedImg = event.target;
    let id = divSignsId.getAttribute("data-id");
    eClone = clicedImg.cloneNode(true);
    div1Skocko.appendChild(eClone);
    customerResult.push(parseInt(id));
  })
});

function validateGuees(finalCombination, customerResult) {
  const matcArr = [];
  const tempRest = [...finalCombination];
  const secRest = [...customerResult];
  tempRest.forEach((tempR, index) => {
    if (tempR === secRest[index]) {
      delete tempRest[index];
      delete secRest[index];
      matcArr.push(2);
    }
  });

  secRest.forEach((_, index) => {
    const hasMatch = tempRest.findIndex((tempRestitem) => tempRestitem === _);
    if (hasMatch >= 0) {
      delete tempRest[hasMatch];
      delete secRest[index];
      matcArr.push(1);
    }
  });
  for (const secRestEnd of secRest) {
    if (secRestEnd) {
      matcArr.push(0);
    }
  }
  return matcArr;
}
const matcArr = validateGuees(finalCombination, customerResult);
let counter = 0;
let buttonSkocko = document.querySelector("#button-skocko")
let imgEls = div1Skocko.querySelectorAll("img")
imgEls.forEach(fo => console.log("fo", fo));
let hit = document.querySelectorAll(".hit");
hit.forEach((hits) => {
  buttonSkocko.addEventListener("click", () => {
    if (customerResult.length === 4) {
      const matcArr = validateGuees(finalCombination, customerResult);
      let matcArrText = matcArr.join("");
      matcArrText = matcArrText.replace(/2/g, "<h4 class='red-text'>2</h4>");
      matcArrText = matcArrText.replace(/1/g, "<h4 class='yellow-text'>1</h4>");
      matcArrText = matcArrText.replace(/0/g, "<h4 class='black-text'>0</h4>");
      hit[counter].innerHTML = matcArrText;
      counter++;
      customerResult = [];
      console.log(counter);
      if (JSON.stringify(matcArr) === JSON.stringify([2, 2, 2, 2])) {
        alert("Cestitamo, upsesno ste pogodili odgovarajuca mesta")
        setTimeout(function () {
          location.reload();
        }, 1400)
      }
      if (counter == 6) {
        alert("zao mi je, niste uspeli da pogodite kombinaciju!Pokusajte ponovo")
        location.reload();
      }
      console.log(customerResult);
      console.log(matcArr);
    }
  });
});



let clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", () => {
  if (div1Skocko.length == 0) {
    console.log("0");
  } else {
    customerResult.pop();
    console.log("custpop", customerResult);
    div1Skocko.removeChild(div1Skocko.lastChild)
  }
});

//skocko-end
// All code should be written in this file.
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;

let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;

let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;

let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

const TIe = "Tie";
const p1 ="Player One";
const p2 ="Player Two";
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const setPlayerMoves = (player, m1t, m1v, m2t, m2v, m3t, m3v) => {
  if (!m1t || !m1v || !m2t || !m2v || !m3t || !m3v) {
    return null;
  }

  if (!validTypes(m1t,m2t,m3t)){
    return null;
  }

  if (!validValues(m1v,m2v,m3v)){
    return null;
  }

  switch (player) {
    case p1:
      playerOneMoveOneType = m1t;
      playerOneMoveOneValue = m1v;
      playerOneMoveTwoType = m2t;
      playerOneMoveTwoValue = m2v;
      playerOneMoveThreeType = m3t;
      playerOneMoveThreeValue = m3v;
      break;
    case p2:
      playerTwoMoveOneType = m1t;
      playerTwoMoveOneValue = m1v;
      playerTwoMoveTwoType = m2t;
      playerTwoMoveTwoValue = m2v;
      playerTwoMoveThreeType = m3t;
      playerTwoMoveThreeValue = m3v;
      break;
    default: null;
  }
  console.log(`setPlayerMoves p1:
  playerOneMoveOneType = ${m1t}
  playerOneMoveOneValue = ${m1v}
  playerOneMoveTwoType = ${m2t}
  playerOneMoveTwoValue = ${m2v}
  playerOneMoveThreeType = ${m3t}
  playerOneMoveThreeValue = ${m3v}

  setPlayerMoves p2
  playerTwoMoveOneType = ${m1t}
  playerTwoMoveOneValue = ${m1v}
  playerTwoMoveTwoType = ${m2t}
  playerTwoMoveTwoValue = ${m2v}
  playerTwoMoveThreeType = ${m3t}
  playerTwoMoveThreeValue = ${m3v}`
  );
};

const validTypes = (t1,t2,t3) =>
  validType(t1) && validType(t2) && validType(t3);

const validType = type =>
  type = ROCK || PAPER || SCISSORS;

const validValues = (v1,v2,v3) =>
  v1 >=1 && v2 >=1 && v3 >=1 && v1 + v2 + v3 <= 99;

const getRoundWinner = round => {
  let p1t;
  let p1v;
  let p2t;
  let p2v;

  switch (round){
    case 1:
      p1t = playerOneMoveOneType;
      p1v = playerOneMoveOneValue;
      p2t = playerTwoMoveOneType;
      p2v = playerTwoMoveOneValue;
      break;
    case 2:
      p1t = playerOneMoveTwoType;
      p1v = playerOneMoveTwoValue;
      p2t = playerTwoMoveTwoType;
      p2v = playerTwoMoveTwoValue;
      break;
    case 3:
      p1t = playerOneMoveThreeType;
      p1v = playerOneMoveThreeValue;
      p2t = playerTwoMoveThreeType;
      p2v = playerTwoMoveThreeValue;
      break;
    default:
        null;
    }
    return evaluateMove(p1t,p1v,p2t,p2v);
};

const evaluateMove = (p1t,p1v,p2t,p2v) => {
  console.log('evaluateMove');
  if (!p1t || !p1v || !p2t || !p2v){
    return null;
  }
console.log(`
  p1t= ${p1t}
  p1v= ${p1v}
  p2t= ${p2t}
  p2v= ${p2v}`)

  if (p1t === p2t){
    if (p1v === p2v){
      return TIe;
    }
    return p1v > p2v ? p1 : p2;
  }
  console.log(`>>>>>>>>p1t= ${p1t}`)
  console.log(`>>>>>>>>p2t= ${p2t}`)

  switch (p1t) {
    case ROCK:
      return p2t === SCISSORS ? p1 : p2;
    case PAPER:
      return p2t === ROCK ? p1 : p2;
    case SCISSORS:
      return p2t === PAPER ? p1 : p2;
    default: console.log('?/?')
  }

};

let p1Wins;
let p2Wins;

const allGlobelsDefined = () =>
  playerOneMoveOneType &&
  playerOneMoveTwoType &&
  playerOneMoveThreeType &&
  playerTwoMoveOneType &&
  playerTwoMoveTwoType &&
  playerTwoMoveThreeType &&
  playerOneMoveOneValue &&
  playerOneMoveTwoValue &&
  playerOneMoveThreeValue &&
  playerTwoMoveOneValue &&
  playerTwoMoveTwoValue &&
  playerTwoMoveThreeValue;

const getGameWinner = () =>{
  console.log('loc1');
  console.log(
`p1m1t= ${playerOneMoveOneType}
p1m2t= ${playerOneMoveTwoType}
p1m3t= ${playerOneMoveThreeType}
p2m1t= ${playerTwoMoveOneType}
p2m2t= ${playerTwoMoveTwoType}
p2m3t= ${playerTwoMoveThreeType}
p1m1v= ${playerOneMoveOneValue}
p1m2v= ${playerOneMoveTwoValue}
p1m3v= ${playerOneMoveThreeValue}
p2m1v= ${playerTwoMoveOneValue}
p2m2v= ${playerTwoMoveTwoValue}
p2m3v= ${playerTwoMoveThreeValue}
`);
 if (!allGlobelsDefined()){
   console.log('loc1.3');
  return null;
  }
 console.log('loc2');

  p1Wins = 0;
  p2Wins = 0;

  let r1Winner = getRoundWinner(1);
  console.log(`round1 win= ${r1Winner}`);
  let r2Winner = getRoundWinner(2);
  console.log(`round2 win= ${r2Winner}`);
  let r3Winner = getRoundWinner(3);
  console.log(`round3 win= ${r3Winner}`);

  incrementScors(r1Winner);
  incrementScors(r2Winner);
  incrementScors(r3Winner);

  if (p1Wins === p2Wins){
    return TIe;
  }
  return p1Wins > p2Wins ? p1 : p2;
};

const incrementScors = winner => {
  switch (winner) {
    case p1:
      p1Wins +=1;
      break;
    case p1:
      p2Wins +=1;
      break;
  }
};

const setComputerMoves = () => {
  setPlayerTwoMoveType();
  setPlayerTwoMoveValue();
};

const setPlayerTwoMoveType = () =>{
  playerTwoMoveOneType = getRandomNumber();
  playerTwoMoveTwoType = getRandomNumber();
  playerTwoMoveThreeType = getRandomNumber();
};

const getRandomInt = n => {
  return Math.floor(Math.random() * n);
}

const getRandomNumber = () => {
  switch (getRandomInt(3)) {
    case 0:
      return ROCK;
    case 1:
      return PAPER;
    case 3:
      return SCISSORS;
  }
};

const setPlayerTwoMoveValue = () =>{
  let remaning = 96;
  let portion = 0;

  portion = getRandomInt(remaning);
  playerTwoMoveOneValue = portion +1;
  remaning -= portion;

  portion = getRandomInt(remaning);
  playerTwoMoveTwoValue = portion +1;
  remaning -= portion;

  playerTwoMoveTwoValue = remaning;
};
